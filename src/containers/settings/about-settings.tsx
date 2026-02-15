import { css } from '@emotion/css';
import { type FC, useMemo } from 'react';
import packageJson from '@/../package.json' with { type: 'json' };
import { Button } from '@/components/button';
import { SettingsContainer } from '@/components/settings-container';
import { SettingsSection } from '@/components/settings-section';
import { SettingsSectionInfo } from '@/components/settings-section-info';
import { SettingsSectionLabel } from '@/components/settings-section-label';
import { useLocale } from '@/i18n/hooks/locale';
import { useGuide } from '@/modules/guide/hooks/use-guide';
import { useTheme } from '@/modules/theme/hooks/use-theme';

export const AboutSettings: FC = () => {
  const { t } = useLocale();
  const { colors } = useTheme();
  const { startGuide } = useGuide();

  const versionClassName = useMemo(
    () => css`
      display: inline-block;
      padding: 4px 8px;
      background: ${colors.neutral[300]};
      border: 1px solid ${colors.neutral[400]};
      border-radius: 3px;
      font-size: 14px;
      color: ${colors.neutral[800]};
      font-weight: 600;
    `,
    [colors],
  );

  const linkClassName = useMemo(
    () => css`
      color: ${colors.accent.main};
      text-decoration: none;
      font-weight: 600;

      &:hover {
        text-decoration: underline;
      }
    `,
    [colors],
  );

  const helpListClassName = useMemo(
    () => css`
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 6px;
    `,
    [],
  );

  const helpItemClassName = useMemo(
    () => css`
      font-size: 13px;
      color: ${colors.neutral[700]};
      line-height: 1.5;
      padding-left: 16px;
      position: relative;

      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: ${colors.accent.main};
        font-weight: bold;
      }
    `,
    [colors],
  );

  return (
    <SettingsContainer>
      <SettingsSection>
        <SettingsSectionLabel i18nKey="settings.sections.about.autoSave.label" />
        <SettingsSectionInfo>
          {t('settings.sections.about.autoSave.description')}
        </SettingsSectionInfo>
      </SettingsSection>

      <SettingsSection>
        <SettingsSectionLabel i18nKey="settings.sections.about.dataStorage.label" />
        <SettingsSectionInfo>
          {t('settings.sections.about.dataStorage.description')}
        </SettingsSectionInfo>
      </SettingsSection>

      <SettingsSection>
        <SettingsSectionLabel i18nKey="settings.sections.about.version.label" />
        <span className={versionClassName}>{packageJson.version}</span>
      </SettingsSection>

      <SettingsSection>
        <SettingsSectionLabel i18nKey="settings.sections.about.howToUse.label" />
        <ul className={helpListClassName}>
          <li className={helpItemClassName}>
            {t('settings.sections.about.howToUse.items.addTask', { key: 'Enter' })}
          </li>
          <li className={helpItemClassName}>
            {t('settings.sections.about.howToUse.items.completeTask')}
          </li>
          <li className={helpItemClassName}>
            {t('settings.sections.about.howToUse.items.editTask')}
          </li>
          <li className={helpItemClassName}>
            {t('settings.sections.about.howToUse.items.reorderTasks')}
          </li>
          <li className={helpItemClassName}>
            {t('settings.sections.about.howToUse.items.searchTasks')}
          </li>
          <li className={helpItemClassName}>
            {t('settings.sections.about.howToUse.items.deleteTask')}
          </li>
        </ul>
      </SettingsSection>

      <SettingsSection>
        <SettingsSectionLabel i18nKey="settings.sections.about.keyboardShortcuts.label" />
        <ul className={helpListClassName}>
          <li className={helpItemClassName}>
            {t('settings.sections.about.keyboardShortcuts.enter', { key: 'Enter' })}
          </li>
          <li className={helpItemClassName}>
            {t('settings.sections.about.keyboardShortcuts.doubleClick', { key: 'Double-click' })}
          </li>
        </ul>
      </SettingsSection>

      <SettingsSection>
        <SettingsSectionLabel i18nKey="settings.sections.about.guide.label" />
        <SettingsSectionInfo>{t('settings.sections.about.guide.description')}</SettingsSectionInfo>
        <div>
          <Button onClick={startGuide}>{t('settings.sections.about.guide.startButton')}</Button>
        </div>
      </SettingsSection>

      <SettingsSection>
        <SettingsSectionLabel i18nKey="settings.sections.about.author.label" />
        <SettingsSectionInfo>{t('settings.sections.about.author.name')}</SettingsSectionInfo>
      </SettingsSection>

      <SettingsSection>
        <SettingsSectionLabel i18nKey="settings.sections.about.repository.label" />
        <SettingsSectionInfo>
          <a
            className={linkClassName}
            href="https://github.com/damianw27/taskacz"
            target="_blank"
            rel="noreferrer"
          >
            github.com/damianw27/taskacz
          </a>
        </SettingsSectionInfo>
      </SettingsSection>
    </SettingsContainer>
  );
};
