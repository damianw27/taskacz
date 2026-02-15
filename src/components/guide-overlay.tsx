import { css } from '@emotion/css';
import { type FC, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '@/components/button';
import { useLocale } from '@/i18n/hooks/locale';
import { useGuide } from '@/modules/guide/hooks/use-guide';
import { GuideActionType } from '@/modules/guide/types/enums/guide-action-type';
import { useNavigation } from '@/modules/navigation/hooks/use-navigation';
import { useTheme } from '@/modules/theme/hooks/use-theme';

interface TargetRect {
  top: number;
  left: number;
  width: number;
  height: number;
  bottom: number;
  right: number;
}

type TooltipPosition = 'top' | 'bottom' | 'center';

const TooltipHeight = 280;
const TooltipWidth = 320;
const Padding = 16;
const SpotlightPadding = 8;

const overlayClassName = css`
  position: fixed;
  inset: 0;
  z-index: 99998;
  pointer-events: none;
`;

const clickBlockerClassName = css`
  position: absolute;
  inset: 0;
  pointer-events: auto;
`;

const progressClassName = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 12px;
`;

const buttonsClassName = css`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export const GuideOverlay: FC = memo(() => {
  const { t } = useLocale();
  const { colors } = useTheme();
  const { isGuideActive, currentStep, currentStepIndex, steps, nextStep, prevStep, skipGuide } =
    useGuide();
  const { navigateToSettings, navigateToTasks, setSettingsPage } = useNavigation();
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const [targetRect, setTargetRect] = useState<TargetRect | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>('center');

  const updateTargetRect = useCallback(() => {
    if (!currentStep?.targetSelector) {
      setTargetRect(null);
      setTooltipPosition('center');
      return;
    }

    const element = document.querySelector(currentStep.targetSelector);
    if (!element) {
      setTargetRect(null);
      setTooltipPosition('center');
      return;
    }

    const rect = element.getBoundingClientRect();
    setTargetRect({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      bottom: rect.bottom,
      right: rect.right,
    });

    const viewportHeight = window.innerHeight;
    const spaceAbove = rect.top - Padding;
    const spaceBelow = viewportHeight - rect.bottom - Padding;

    if (rect.height > viewportHeight * 0.5) {
      setTooltipPosition('center');
    } else if (spaceBelow >= TooltipHeight) {
      setTooltipPosition('bottom');
    } else if (spaceAbove >= TooltipHeight) {
      setTooltipPosition('top');
    } else {
      setTooltipPosition('center');
    }
  }, [currentStep]);

  useEffect(() => {
    if (!isGuideActive) return;

    const timer = setTimeout(updateTargetRect, 150);
    window.addEventListener('resize', updateTargetRect);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateTargetRect);
    };
  }, [isGuideActive, updateTargetRect]);

  useEffect(() => {
    if (isGuideActive && nextButtonRef.current) {
      const timer = setTimeout(() => nextButtonRef.current?.focus(), 200);
      return () => clearTimeout(timer);
    }
  }, [isGuideActive]);

  useEffect(() => {
    if (!isGuideActive || currentStepIndex !== 0) {
      return;
    }

    if (currentStep?.action === GuideActionType.NavigateTasks) {
      navigateToTasks();
    }
  }, [isGuideActive, currentStepIndex, currentStep, navigateToTasks]);

  const handleNext = useCallback(() => {
    const nextIndex = currentStepIndex + 1;
    const nextStepData = steps[nextIndex];

    if (nextStepData?.action === GuideActionType.NavigateSettings) {
      navigateToSettings();
    } else if (nextStepData?.action === GuideActionType.NavigateTasks) {
      navigateToTasks();
    } else if (
      nextStepData?.action === GuideActionType.SelectSettingsPage &&
      nextStepData.settingsPage
    ) {
      setSettingsPage(nextStepData.settingsPage);
    }

    nextStep();
  }, [currentStepIndex, steps, navigateToSettings, navigateToTasks, setSettingsPage, nextStep]);

  const handlePrev = useCallback(() => {
    const prevIndex = currentStepIndex - 1;
    const prevStepData = steps[prevIndex];

    if (prevStepData) {
      if (
        currentStep?.action === GuideActionType.NavigateSettings ||
        (currentStep?.action === GuideActionType.SelectSettingsPage &&
          !prevStepData.action?.includes('settings'))
      ) {
        navigateToTasks();
      } else if (
        prevStepData.action === GuideActionType.SelectSettingsPage &&
        prevStepData.settingsPage
      ) {
        setSettingsPage(prevStepData.settingsPage);
      } else if (prevStepData.action === GuideActionType.NavigateSettings) {
        navigateToSettings();
      }
    }

    prevStep();
  }, [
    currentStepIndex,
    steps,
    currentStep,
    navigateToTasks,
    setSettingsPage,
    navigateToSettings,
    prevStep,
  ]);

  const backdropClassName = useMemo(() => {
    if (!targetRect) {
      return css`
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.7);
        pointer-events: auto;
      `;
    }

    const spotlightTop = targetRect.top - SpotlightPadding;
    const spotlightLeft = targetRect.left - SpotlightPadding;
    const spotlightWidth = targetRect.width + SpotlightPadding * 2;
    const spotlightHeight = targetRect.height + SpotlightPadding * 2;

    return css`
      position: absolute;
      top: ${spotlightTop}px;
      left: ${spotlightLeft}px;
      width: ${spotlightWidth}px;
      height: ${spotlightHeight}px;
      border-radius: 6px;
      box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.7);
      pointer-events: none;

      &::before {
        content: '';
        position: absolute;
        inset: -3px;
        border: 3px solid ${colors.accent.main};
        border-radius: 8px;
        animation: pulse 1.5s ease-in-out infinite;
      }

      @keyframes pulse {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }
    `;
  }, [targetRect, colors]);

  const getTooltipStyle = useMemo(() => {
    if (tooltipPosition === 'center' || !targetRect) {
      return css`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `;
    }

    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 400;
    let leftPos = targetRect.left + targetRect.width / 2 - TooltipWidth / 2;
    leftPos = Math.max(Padding, Math.min(leftPos, viewportWidth - TooltipWidth - Padding));

    if (tooltipPosition === 'bottom') {
      return css`
        position: fixed;
        top: ${targetRect.bottom + SpotlightPadding + Padding}px;
        left: ${leftPos}px;
      `;
    }

    return css`
      position: fixed;
      top: ${targetRect.top - SpotlightPadding - Padding - TooltipHeight}px;
      left: ${leftPos}px;
    `;
  }, [tooltipPosition, targetRect]);

  const tooltipClassName = useMemo(
    () => css`
      background: ${colors.neutral[100]};
      border: 3px solid ${colors.accent.main};
      border-radius: 8px;
      padding: 20px;
      width: ${TooltipWidth}px;
      max-width: calc(100vw - ${Padding * 2}px);

      z-index: 1;
      pointer-events: auto;
    `,
    [colors],
  );

  const titleClassName = useMemo(
    () => css`
      font-size: 15px;
      font-weight: 700;
      color: ${colors.neutral[800]};
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-align: center;
    `,
    [colors],
  );

  const descriptionClassName = useMemo(
    () => css`
      font-size: 13px;
      color: ${colors.neutral[700]};
      line-height: 1.6;
      margin-bottom: 16px;
      text-align: center;
    `,
    [colors],
  );

  const dotClassName = useMemo(
    () => css`
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${colors.neutral[400]};
      transition: background 0.2s ease, transform 0.2s ease;
    `,
    [colors],
  );

  const activeDotClassName = useMemo(
    () => css`
      background: ${colors.accent.main};
      transform: scale(1.3);
    `,
    [colors],
  );

  const skipButtonClassName = useMemo(
    () => css`
      background: transparent;
      border: none;
      color: ${colors.neutral[600]};
      font-size: 11px;
      cursor: pointer;

      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 8px;
      margin-top: 12px;
      width: 100%;
      text-align: center;

      &:hover {
        color: ${colors.neutral[800]};
      }
    `,
    [colors],
  );

  const stepCounterClassName = useMemo(
    () => css`
      font-size: 10px;
      color: ${colors.neutral[600]};
      text-align: center;
      margin-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 1px;
    `,
    [colors],
  );

  if (!isGuideActive || !currentStep) {
    return null;
  }

  const isLastStep = currentStepIndex === steps.length - 1;
  const isFirstStep = currentStepIndex === 0;

  return (
    <div className={overlayClassName}>
      <div className={clickBlockerClassName} />
      <div className={backdropClassName} />
      <div className={`${tooltipClassName} ${getTooltipStyle}`}>
        <div className={stepCounterClassName}>
          {t('guide.stepCounter', { current: currentStepIndex + 1, total: steps.length })}
        </div>
        <div className={progressClassName}>
          {steps.map((_, index) => (
            <div
              key={`guide-step-${index + 1}`}
              className={`${dotClassName} ${index === currentStepIndex ? activeDotClassName : ''}`}
            />
          ))}
        </div>
        <h3 className={titleClassName}>{currentStep.title}</h3>
        <p className={descriptionClassName}>{currentStep.description}</p>
        <div className={buttonsClassName}>
          {!isFirstStep && <Button onClick={handlePrev}>{t('common.back')}</Button>}
          <Button ref={nextButtonRef} onClick={handleNext}>
            {isLastStep ? t('common.finish') : t('common.next')}
          </Button>
        </div>
        {!isLastStep && (
          <button type="button" className={skipButtonClassName} onClick={skipGuide}>
            {t('common.skipGuide')}
          </button>
        )}
      </div>
    </div>
  );
});

GuideOverlay.displayName = 'GuideOverlay';
