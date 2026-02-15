import { css } from '@emotion/css';
import i18n from 'i18next';
import { type FC, memo, useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/button';
import { Languages } from '@/i18n/consts/languages';
import { useApi } from '@/modules/api/hooks/use-api';
import { useTheme } from '@/modules/theme/hooks/use-theme';

export const LanguageModal: FC = memo(() => {
  const { colors } = useTheme();
  const { appSettingsService } = useApi();
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState('en');

  useEffect(() => {
    const loadLanguage = async (): Promise<void> => {
      const { language } = await appSettingsService.getSettings();

      if (!language) {
        setIsVisible(true);
        return;
      }

      setSelected(language);
    };

    void loadLanguage();
  }, [appSettingsService]);

  const handleConfirm = async () => {
    const settings = await appSettingsService.getSettings();
    await appSettingsService.setSettings({ ...settings, language: selected });
    await i18n.changeLanguage(selected);
    setIsVisible(false);
  };

  const backdropClassName = css`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    box-sizing: border-box;
  `;

  const modalClassName = useMemo(
    () => css`
      background: ${colors.neutral[100]};
      border: 3px solid ${colors.accent.main};
      border-radius: 8px;
      padding: 24px;
      width: 100%;
      max-width: 520px;
      max-height: 90vh;
      display: flex;
      flex-direction: column;

      box-sizing: border-box;
    `,
    [colors],
  );

  const titleClassName = useMemo(
    () => css`
      font-size: 14px;
      font-weight: 700;
      color: ${colors.neutral[800]};
      text-transform: uppercase;
      letter-spacing: 2px;
      text-align: center;
      margin-bottom: 4px;
    `,
    [colors],
  );

  const subtitleClassName = useMemo(
    () => css`
      font-size: 11px;
      color: ${colors.neutral[500]};
      text-align: center;
      letter-spacing: 1px;
      margin-bottom: 20px;
    `,
    [colors],
  );

  const dividerClassName = useMemo(
    () => css`
      border: none;
      border-top: 2px solid ${colors.neutral[300]};
      margin-bottom: 16px;
    `,
    [colors],
  );

  const gridClassName = css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    overflow-y: auto;
    flex: 1;
    padding-right: 4px;
    margin-bottom: 20px;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
    }
  `;

  const getOptionClassName = useMemo(
    () => (isSelected: boolean) =>
      css`
        padding: 10px 12px;
        border: 2px solid ${isSelected ? colors.accent.main : colors.neutral[300]};
        border-radius: 4px;
        background: ${isSelected ? colors.accent.main : colors.neutral[200]};
        cursor: pointer;
        transition: border-color 0.15s ease, background 0.15s ease;
        text-align: left;

        &:hover {
          border-color: ${colors.accent.main};
          background: ${isSelected ? colors.accent.dark : colors.accent.light};
        }

        &:active {
          transform: translate(1px, 1px);
        }
      `,
    [colors],
  );

  const nativeNameClassName = useMemo(
    () => (isSelected: boolean) =>
      css`
        font-size: 13px;
        font-weight: 700;
        color: ${isSelected ? colors.neutral[50] : colors.neutral[800]};
        display: block;
        font-family: inherit;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      `,
    [colors],
  );

  const englishNameClassName = useMemo(
    () => (isSelected: boolean) =>
      css`
        font-size: 10px;
        color: ${isSelected ? colors.accent.lighter : colors.neutral[500]};
        display: block;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-top: 2px;
        font-family: inherit;
      `,
    [colors],
  );

  const confirmClassName = css`
    width: 100%;
  `;

  if (!isVisible) return null;

  return (
    <div className={backdropClassName}>
      <div className={modalClassName}>
        <p className={titleClassName}>Choose your language</p>
        <p className={subtitleClassName}>Select a language to continue</p>
        <hr className={dividerClassName} />
        <div className={gridClassName}>
          {Languages.map(lang => {
            const isSelected = selected === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                className={getOptionClassName(isSelected)}
                onClick={() => setSelected(lang.code)}
              >
                <span className={nativeNameClassName(isSelected)}>{lang.nativeName}</span>
                <span className={englishNameClassName(isSelected)}>{lang.englishName}</span>
              </button>
            );
          })}
        </div>
        <div className={confirmClassName}>
          <Button style={{ width: '100%' }} onClick={handleConfirm}>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
});

LanguageModal.displayName = 'LanguageModal';
