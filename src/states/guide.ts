import { create } from 'zustand';
import { getApi } from '@/states/api';

interface GuideState {
  readonly isGuideActive: boolean;
  readonly currentStepIndex: number;
  readonly hasSeenGuide: boolean;
  readonly hasInitialized: boolean;
}

interface GuideStore extends GuideState {
  readonly initializeGuide: () => void;
  readonly startGuide: () => void;
  readonly nextStep: (stepsLength: number) => void;
  readonly prevStep: () => void;
  readonly skipGuide: () => void;
  readonly completeGuide: () => void;
}

export const useGuideStore = create<GuideStore>((set, get) => ({
  isGuideActive: false,
  currentStepIndex: 0,
  hasSeenGuide: false,
  hasInitialized: false,
  initializeGuide: () => {
    const { hasInitialized } = get();

    if (hasInitialized) {
      return;
    }

    set({ hasInitialized: true, hasSeenGuide: true });

    const { appSettingsService } = getApi();

    void (async () => {
      const { guideCompleted } = await appSettingsService.getSettings();
      const hasSeenGuide = guideCompleted === true;
      set({ hasSeenGuide: hasSeenGuide });

      if (hasSeenGuide || typeof window === 'undefined') {
        return;
      }

      window.setTimeout(() => {
        const state = get();

        if (!state.hasSeenGuide) {
          set({ isGuideActive: true });
        }
      }, 300);
    })();
  },
  startGuide: () =>
    set({
      currentStepIndex: 0,
      isGuideActive: true,
    }),
  nextStep: (stepsLength: number) => {
    const { currentStepIndex } = get();

    if (currentStepIndex < stepsLength - 1) {
      set({ currentStepIndex: currentStepIndex + 1 });
      return;
    }

    const { appSettingsService } = getApi();
    void (async () => {
      const settings = await appSettingsService.getSettings();
      await appSettingsService.setSettings({ ...settings, guideCompleted: true });
    })();
    set({
      isGuideActive: false,
      hasSeenGuide: true,
    });
  },
  prevStep: () => {
    const { currentStepIndex } = get();

    if (currentStepIndex > 0) {
      set({ currentStepIndex: currentStepIndex - 1 });
    }
  },
  skipGuide: () => {
    const { appSettingsService } = getApi();
    void (async () => {
      const settings = await appSettingsService.getSettings();
      await appSettingsService.setSettings({ ...settings, guideCompleted: true });
    })();
    set({
      isGuideActive: false,
      hasSeenGuide: true,
    });
  },
  completeGuide: () => {
    const { appSettingsService } = getApi();
    void (async () => {
      const settings = await appSettingsService.getSettings();
      await appSettingsService.setSettings({ ...settings, guideCompleted: true });
    })();
    set({
      isGuideActive: false,
      hasSeenGuide: true,
    });
  },
}));
