import i18n from 'i18next';
import { type FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Select } from '@/components/select';
import { SettingsContainer } from '@/components/settings-container';
import { SettingsSection } from '@/components/settings-section';
import { SettingsSectionLabel } from '@/components/settings-section-label';
import { Languages } from '@/i18n/consts/languages';
import { useLocale } from '@/i18n/hooks/locale';
import { useApi } from '@/modules/api/hooks/use-api';
import { Theme } from '@/modules/theme/types/enums/theme';
import { useTheme } from '@/modules/theme/hooks/use-theme';

export const GeneralSettings: FC = () => {
  const { t } = useLocale();
  const { theme, setTheme } = useTheme();
  const { appSettingsService } = useApi();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language ?? 'en');

  const languageOptions = useMemo(
    () =>
      Languages.map(lang => ({
        value: lang.code,
        label: `${lang.nativeName} (${lang.englishName})`,
      })),
    [],
  );

  const themeOptions = useMemo(
    () => [
      { value: Theme.Light, label: t('settings.sections.lookAndFeel.theme.light') },
      { value: Theme.Dark, label: t('settings.sections.lookAndFeel.theme.dark') },
    ],
    [t],
  );

  useEffect(() => {
    const loadLanguage = async (): Promise<void> => {
      const { language } = await appSettingsService.getSettings();

      if (language) {
        setCurrentLanguage(language);
      }
    };

    void loadLanguage();
  }, [appSettingsService]);

  const handleLanguageChange = useCallback(
    async (code: string) => {
      setCurrentLanguage(code);
      const settings = await appSettingsService.getSettings();
      await appSettingsService.setSettings({ ...settings, language: code });
      void i18n.changeLanguage(code);
    },
    [appSettingsService],
  );

  return (
    <SettingsContainer>
      <SettingsSection>
        <SettingsSectionLabel i18nKey="settings.sections.general.language.label" />
        <Select value={currentLanguage} options={languageOptions} onChange={handleLanguageChange} />
      </SettingsSection>
      <SettingsSection>
        <SettingsSectionLabel i18nKey="settings.sections.lookAndFeel.theme.label" />
        <Select value={theme} options={themeOptions} onChange={value => setTheme(value as Theme)} />
      </SettingsSection>
    </SettingsContainer>
  );
};
