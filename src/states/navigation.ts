import { create } from 'zustand';
import { SettingsPageKey } from '@/modules/navigation/types/enums/settings-page-key';

const isSettingsPageKey = (value: string | null): value is SettingsPageKey =>
  value === SettingsPageKey.General || value === SettingsPageKey.About;

export const normalizeSettingsPageKey = (value: string | null): SettingsPageKey =>
  isSettingsPageKey(value) ? value : SettingsPageKey.General;

interface NavigationState {
  readonly settingsPage: SettingsPageKey;
  readonly setSettingsPage: (page: SettingsPageKey) => void;
}

export const useNavigationStore = create<NavigationState>(set => ({
  settingsPage: SettingsPageKey.General,
  setSettingsPage: (page: SettingsPageKey) => set({ settingsPage: page }),
}));
