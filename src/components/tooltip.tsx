/** biome-ignore-all lint/a11y/noStaticElementInteractions: Tooltip now is using mouse enter and leave events */
// TODO: remove interactivity from the tooltip div
import { css } from '@emotion/css';
import { type FC, type ReactNode, useCallback, useMemo, useRef, useState } from 'react';
import { useTheme } from '@/modules/theme/hooks/use-theme';

type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

const wrapperClassName = css`
  display: inline-flex;
`;

interface Props {
  readonly text: string;
  readonly children: ReactNode;
  readonly position?: TooltipPosition;
}

const TooltipOffset = 8;

export const Tooltip: FC<Props> = ({ text, children, position = 'top' }) => {
  const { colors } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);

  const tooltipBaseClassName = useMemo(
    () => css`
      position: fixed;
      padding: 6px 12px;
      background: ${colors.danger.light};
      color: ${colors.danger.darker};
      font-size: 12px;
      font-weight: 700;

      text-transform: uppercase;
      letter-spacing: 1px;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.15s ease;
      z-index: 99999;
      border: 2px solid ${colors.danger.dark};
      border-radius: 3px;
      box-shadow: 3px 3px 0 ${colors.tooltip.shadowColor};
    `,
    [colors],
  );

  const visibleClassName = css`
    opacity: 1;
  `;

  const arrowStyles = useMemo(
    (): Record<TooltipPosition, string> => ({
      top: css`
        &::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 5px solid transparent;
          border-top-color: ${colors.danger.dark};
        }
        &::before {
          content: '';
          position: absolute;
          top: calc(100% - 2px);
          left: 50%;
          transform: translateX(-50%);
          border: 4px solid transparent;
          border-top-color: ${colors.danger.light};
          z-index: 1;
        }
      `,
      right: css`
        &::after {
          content: '';
          position: absolute;
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-right-color: ${colors.danger.dark};
        }
        &::before {
          content: '';
          position: absolute;
          right: calc(100% - 2px);
          top: 50%;
          transform: translateY(-50%);
          border: 4px solid transparent;
          border-right-color: ${colors.danger.light};
          z-index: 1;
        }
      `,
      bottom: css`
        &::after {
          content: '';
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 5px solid transparent;
          border-bottom-color: ${colors.danger.dark};
        }
        &::before {
          content: '';
          position: absolute;
          bottom: calc(100% - 2px);
          left: 50%;
          transform: translateX(-50%);
          border: 4px solid transparent;
          border-bottom-color: ${colors.danger.light};
          z-index: 1;
        }
      `,
      left: css`
        &::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-left-color: ${colors.danger.dark};
        }
        &::before {
          content: '';
          position: absolute;
          left: calc(100% - 2px);
          top: 50%;
          transform: translateY(-50%);
          border: 4px solid transparent;
          border-left-color: ${colors.danger.light};
          z-index: 1;
        }
      `,
    }),
    [colors],
  );

  const calculatePosition = useCallback(() => {
    if (!wrapperRef.current || !tooltipRef.current) return;

    const rect = wrapperRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    let top = 0;
    let left = 0;

    switch (position) {
      case 'top':
        top = rect.top - tooltipRect.height - TooltipOffset;
        left = rect.left + rect.width / 2 - tooltipRect.width / 2;
        break;
      case 'right':
        top = rect.top + rect.height / 2 - tooltipRect.height / 2;
        left = rect.right + TooltipOffset;
        break;
      case 'bottom':
        top = rect.bottom + TooltipOffset;
        left = rect.left + rect.width / 2 - tooltipRect.width / 2;
        break;
      case 'left':
        top = rect.top + rect.height / 2 - tooltipRect.height / 2;
        left = rect.left - tooltipRect.width - TooltipOffset;
        break;
    }

    setCoords({ top, left });
  }, [position]);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
    requestAnimationFrame(calculatePosition);
  }, [calculatePosition]);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={wrapperClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <span
        ref={tooltipRef}
        className={`${tooltipBaseClassName} ${arrowStyles[position]} ${isVisible ? visibleClassName : ''}`}
        style={{ top: coords.top, left: coords.left }}
      >
        {text}
      </span>
    </div>
  );
};
