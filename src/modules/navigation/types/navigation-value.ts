import type { SettingsPageKey } from '@/modules/navigation/types/enums/settings-page-key';

export interface NavigationValue {
  currentPath: string;
  settingsPage: SettingsPageKey;
  navigateTo: (path: string) => void;
  setSettingsPage: (page: string) => void;
  navigateToSettings: () => void;
  navigateToTasks: () => void;
}
