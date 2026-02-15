import type { AppSettings } from '@/modules/api/types/app-settings';

export interface AppSettingsService {
  readonly getSettings: () => Promise<AppSettings>;
  readonly setSettings: (settings: AppSettings) => Promise<void>;
}
