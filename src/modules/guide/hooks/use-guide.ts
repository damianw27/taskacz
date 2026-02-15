import { useCallback, useEffect, useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useGuideSteps } from '@/modules/guide/consts/guide-steps';
import type { GuideValue } from '@/modules/guide/types/guide-value';
import { useGuideStore } from '@/states/guide';

export const useGuide = (): GuideValue => {
  const steps = useGuideSteps();
  const {
    isGuideActive,
    currentStepIndex,
    hasSeenGuide,
    initializeGuide,
    startGuide,
    nextStoreStep,
    prevStep,
    skipGuide,
    completeGuide,
  } = useGuideStore(
    useShallow(state => ({
      isGuideActive: state.isGuideActive,
      currentStepIndex: state.currentStepIndex,
      hasSeenGuide: state.hasSeenGuide,
      initializeGuide: state.initializeGuide,
      startGuide: state.startGuide,
      nextStoreStep: state.nextStep,
      prevStep: state.prevStep,
      skipGuide: state.skipGuide,
      completeGuide: state.completeGuide,
    })),
  );

  useEffect(() => {
    initializeGuide();
  }, [initializeGuide]);

  const nextStep = useCallback(() => {
    nextStoreStep(steps.length);
  }, [nextStoreStep, steps.length]);

  return useMemo(
    () => ({
      isGuideActive,
      currentStepIndex,
      currentStep: isGuideActive ? (steps[currentStepIndex] ?? null) : null,
      steps,
      hasSeenGuide,
      startGuide,
      nextStep,
      prevStep,
      skipGuide,
      completeGuide,
    }),
    [
      isGuideActive,
      currentStepIndex,
      steps,
      hasSeenGuide,
      startGuide,
      nextStep,
      prevStep,
      skipGuide,
      completeGuide,
    ],
  );
};
