import { css, cx } from '@emotion/css';
import { type FC, memo, type ReactElement, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { Tooltip } from '@/components/tooltip';
import { useTheme } from '@/modules/theme/hooks/use-theme';

interface Props {
  readonly to: string;
  readonly label: string;
  readonly icon: ReactElement;
}

export const TabButton: FC<Props> = memo(({ to, label, icon }) => {
  const { colors } = useTheme();

  const className = useMemo(
    () => css`
      background-color: transparent;
      color: ${colors.tab.inactive};
      border: none;
      border-radius: 4px;
      outline: none;
      padding: 8px;
      transition: background-color 0.15s ease, color 0.15s ease;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 6px;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      position: relative;

      text-decoration: none;

      &:hover {
        background-color: ${colors.alpha.accentLight};
        color: ${colors.tab.active};
      }

      &.active {
        pointer-events: none;
        background: ${colors.alpha.accentMedium};
        color: ${colors.tab.active};
      }
    `,
    [colors],
  );

  return (
    <Tooltip text={label} position="right">
      <NavLink
        to={to}
        className={({ isActive }: { isActive: boolean }) => cx(className, { active: isActive })}
      >
        {icon}
      </NavLink>
    </Tooltip>
  );
});

TabButton.displayName = 'TabButton';
