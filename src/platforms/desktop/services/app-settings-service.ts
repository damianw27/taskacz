import { filesystem } from '@neutralinojs/lib';
import type { AppSettings } from '@/modules/api/types/app-settings';
import type { AppSettingsService } from '@/modules/api/types/app-settings-service';

const settingsFilePath = './settings.json';

const readSettings = async (): Promise<AppSettings> => {
  try {
    const content = await filesystem.readFile(settingsFilePath);
    return (JSON.parse(content) as AppSettings) ?? {};
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`Unable to read file: ${errorMessage}`, error);

    await filesystem.writeFile(settingsFilePath, '{}');
    return {};
  }
};

const writeSettings = async (settings: AppSettings): Promise<void> => {
  try {
    await filesystem.writeFile(settingsFilePath, JSON.stringify(settings));
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`Unable to save '${settingsFilePath}': ${errorMessage}`, error);
  }
};

export const neutralinoAppSettingsService: AppSettingsService = {
  getSettings: readSettings,
  setSettings: writeSettings,
};
