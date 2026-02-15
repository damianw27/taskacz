import { css } from '@emotion/css';
import { type FC, memo, type ReactNode, useMemo } from 'react';
import { useTheme } from '@/modules/theme/hooks/use-theme';

const topSectionClassName = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  align-items: center;
`;

const bottomSectionClassName = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
`;

interface Props {
  readonly children: ReactNode;
  readonly bottomChildren?: ReactNode;
}

export const TabButtonGroup: FC<Props> = memo(({ children, bottomChildren }) => {
  const { colors } = useTheme();

  const className = useMemo(
    () => css`
      display: flex;
      flex-direction: column;
      padding: 8px;
      background: ${colors.tab.menuBackground};
      gap: 6px;
      min-width: 72px;
      border-right: 3px solid ${colors.accent.main};
      position: relative;
      z-index: 10;
    `,
    [colors],
  );

  const separatorClassName = useMemo(
    () => css`
      height: 2px;
      background: ${colors.accent.main};
      margin: 6px 0;
      opacity: 0.5;
    `,
    [colors],
  );

  return (
    <nav className={className} data-guide="tabs" aria-label="Primary">
      <div className={topSectionClassName}>{children}</div>
      {bottomChildren && (
        <>
          <div className={separatorClassName} />
          <div className={bottomSectionClassName}>{bottomChildren}</div>
        </>
      )}
    </nav>
  );
});

TabButtonGroup.displayName = 'TabButtonGroup';
