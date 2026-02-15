import { css } from '@emotion/css';
import { type FC, useMemo } from 'react';
import { useLocale } from '@/i18n/hooks/locale';
import type { NamespaceKey } from '@/i18n/types/namespace';
import { useTheme } from '@/modules/theme/hooks/use-theme';

interface Props {
  readonly i18nKey: NamespaceKey;
}

export const SettingsSectionLabel: FC<Props> = ({ i18nKey }) => {
  const { colors } = useTheme();
  const { t } = useLocale();

  const labelClassName = useMemo(
    () => css`
      font-size: 12px;
      font-weight: 700;
      color: ${colors.neutral[700]};
      text-transform: uppercase;
      letter-spacing: 1px;

    `,
    [colors],
  );

  return <h3 className={labelClassName}>{t(i18nKey)}</h3>;
};
