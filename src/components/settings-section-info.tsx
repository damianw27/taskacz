import { css } from '@emotion/css';
import { type FC, type ReactNode, useMemo } from 'react';
import { useTheme } from '@/modules/theme/hooks/use-theme';

interface Props {
  readonly children: ReactNode;
}

export const SettingsSectionInfo: FC<Props> = ({ children }) => {
  const { colors } = useTheme();

  const infoClassName = useMemo(
    () => css`
      font-size: 14px;
      color: ${colors.neutral[600]};

      line-height: 1.5;
    `,
    [colors],
  );

  return <p className={infoClassName}>{children}</p>;
};
