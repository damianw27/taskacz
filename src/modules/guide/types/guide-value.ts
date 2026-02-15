import type { GuideStep } from '@/modules/guide/types/guide-step';

export interface GuideValue {
  isGuideActive: boolean;
  currentStepIndex: number;
  currentStep: GuideStep | null;
  steps: GuideStep[];
  hasSeenGuide: boolean;
  startGuide: () => void;
  nextStep: () => void;
  prevStep: () => void;
  skipGuide: () => void;
  completeGuide: () => void;
}
