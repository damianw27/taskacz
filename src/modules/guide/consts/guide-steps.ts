import { useMemo } from 'react';
import { useLocale } from '@/i18n/hooks/locale';
import { GuideActionType } from '@/modules/guide/types/enums/guide-action-type';
import type { GuideStep } from '@/modules/guide/types/guide-step';
import { SettingsPageKey } from '@/modules/navigation/types/enums/settings-page-key';

export const useGuideSteps = (): GuideStep[] => {
  const { t } = useLocale();

  return useMemo(
    () => [
      {
        id: 'welcome',
        title: t('guide.steps.welcome.title'),
        description: t('guide.steps.welcome.description'),
        action: GuideActionType.NavigateTasks,
      },
      {
        id: 'task-input',
        title: t('guide.steps.taskInput.title'),
        description: t('guide.steps.taskInput.description'),
        targetSelector: '[data-guide="task-input"]',
      },
      {
        id: 'task-list',
        title: t('guide.steps.taskList.title'),
        description: t('guide.steps.taskList.description'),
        targetSelector: '[data-guide="task-list"]',
      },
      {
        id: 'task-actions',
        title: t('guide.steps.taskActions.title'),
        description: t('guide.steps.taskActions.description'),
        targetSelector: '[data-guide="task-list"]',
      },
      {
        id: 'search',
        title: t('guide.steps.search.title'),
        description: t('guide.steps.search.description'),
        targetSelector: '[data-guide="search"]',
      },
      {
        id: 'tabs',
        title: t('guide.steps.tabs.title'),
        description: t('guide.steps.tabs.description'),
        targetSelector: '[data-guide="tabs"]',
      },
      {
        id: 'settings-intro',
        title: t('guide.steps.settingsIntro.title'),
        description: t('guide.steps.settingsIntro.description'),
        targetSelector: '[data-guide="tabs"]',
        action: GuideActionType.NavigateSettings,
      },
      {
        id: 'settings-general',
        title: t('guide.steps.settingsGeneral.title'),
        description: t('guide.steps.settingsGeneral.description'),
        targetSelector: '[data-guide="settings-content"]',
        action: GuideActionType.SelectSettingsPage,
        settingsPage: SettingsPageKey.General,
      },
      {
        id: 'settings-about',
        title: t('guide.steps.settingsAbout.title'),
        description: t('guide.steps.settingsAbout.description'),
        targetSelector: '[data-guide="settings-content"]',
        action: GuideActionType.SelectSettingsPage,
        settingsPage: SettingsPageKey.About,
      },
      {
        id: 'complete',
        title: t('guide.steps.complete.title'),
        description: t('guide.steps.complete.description'),
      },
    ],
    [t],
  );
};
