import { css } from '@emotion/css';
import { type FC, lazy, memo, Suspense, useMemo } from 'react';
import { PageContainer } from '@/components/page-container';
import { PageHeader } from '@/components/page-header';
import { Select } from '@/components/select';
import { useLocale } from '@/i18n/hooks/locale';
import { useNavigation } from '@/modules/navigation/hooks/use-navigation';
import { SettingsPageKey } from '@/modules/navigation/types/enums/settings-page-key';
import type { SettingsPageDef } from '@/modules/navigation/types/settings-page-def';
import { useTheme } from '@/modules/theme/hooks/use-theme';
import { getVerticalScrollbarStyle } from '@/modules/theme/utils/scrollbar-style';

const GeneralSettings = lazy(() =>
  import('@/containers/settings/general-settings').then(module => ({
    default: module.GeneralSettings,
  })),
);

const AboutSettings = lazy(() =>
  import('@/containers/settings/about-settings').then(module => ({
    default: module.AboutSettings,
  })),
);

const getSettingsSections = (
  t: ReturnType<typeof useLocale>['t'],
): Record<SettingsPageKey, SettingsPageDef> => ({
  [SettingsPageKey.General]: {
    label: t('settings.sections.general.label'),
    component: GeneralSettings,
  },
  [SettingsPageKey.About]: { label: t('settings.sections.about.label'), component: AboutSettings },
});

export const SettingsPage: FC = memo(() => {
  const { t } = useLocale();
  const { colors } = useTheme();
  const { settingsPage, setSettingsPage } = useNavigation();

  const settingsSections = useMemo(() => getSettingsSections(t), [t]);
  const selectOptions = useMemo(
    () =>
      Object.entries(settingsSections).map(([key, { label }]) => ({
        value: key,
        label,
      })),
    [settingsSections],
  );

  const contentClassName = useMemo(
    () => css`
      flex: 1;
      overflow-y: auto;
      padding: 4px 0;
      ${getVerticalScrollbarStyle(colors)}
    `,
    [colors],
  );

  const currentSection = useMemo(
    () => (settingsPage in settingsSections ? settingsPage : SettingsPageKey.General),
    [settingsPage, settingsSections],
  );

  const CurrentSection = useMemo(
    () => settingsSections[currentSection].component,
    [currentSection, settingsSections],
  );

  return (
    <PageContainer ariaLabelledBy="settings-page-title">
      <PageHeader
        titleId="settings-page-title"
        title={t('settings.title')}
        rightContent={
          <Select value={currentSection} options={selectOptions} onChange={setSettingsPage} />
        }
      />
      <section className={contentClassName} data-guide="settings-content">
        <Suspense fallback={null}>
          <CurrentSection />
        </Suspense>
      </section>
    </PageContainer>
  );
});

SettingsPage.displayName = 'SettingsPage';
