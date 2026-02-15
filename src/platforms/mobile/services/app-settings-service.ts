import { Preferences } from '@capacitor/preferences';
import type { AppSettings } from '@/modules/api/types/app-settings';
import type { AppSettingsService } from '@/modules/api/types/app-settings-service';

const AppSettingsStorageKey = 'taskacz_settings';

const readSettings = async (): Promise<AppSettings> => {
  try {
    const { value } = await Preferences.get({ key: AppSettingsStorageKey });
    return value ? ((JSON.parse(value) as AppSettings) ?? {}) : {};
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`Unable to load app settings: ${errorMessage}`, error);
    return {};
  }
};

const writeSettings = async (settings: AppSettings): Promise<void> => {
  try {
    await Preferences.set({ key: AppSettingsStorageKey, value: JSON.stringify(settings) });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`Unable to save app settings: ${errorMessage}`, error);
  }
};

export const capacitorAppSettingsService: AppSettingsService = {
  getSettings: readSettings,
  setSettings: writeSettings,
};
