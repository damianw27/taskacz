import { css } from '@emotion/css';
import { type FC, type ReactNode, memo, useMemo } from 'react';
import { useTheme } from '@/modules/theme/hooks/use-theme';

interface Props {
  readonly title: string;
  readonly titleId: string;
  readonly rightContent?: ReactNode;
}

export const PageHeader: FC<Props> = memo(({ title, titleId, rightContent }) => {
  const { colors } = useTheme();

  const headerClassName = useMemo(
    () => css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 12px;
      border-bottom: 2px solid ${colors.accent.main};
    `,
    [colors],
  );

  const titleClassName = useMemo(
    () => css`
      font-size: 24px;
      font-weight: 700;
      color: ${colors.neutral[800]};
      letter-spacing: 1px;
      text-transform: uppercase;
    `,
    [colors],
  );

  return (
    <header className={headerClassName}>
      <h1 id={titleId} className={titleClassName}>
        {title}
      </h1>
      {rightContent}
    </header>
  );
});

PageHeader.displayName = 'PageHeader';
