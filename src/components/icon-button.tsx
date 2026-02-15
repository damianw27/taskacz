import { css, cx } from '@emotion/css';
import type { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { useMemo } from 'react';
import { useTheme } from '@/modules/theme/hooks/use-theme';

type DefaultButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface Props extends DefaultButtonProps {
  variant?: 'default' | 'danger' | 'primary';
}

export const IconButton: FC<Props> = ({ variant = 'default', children, ...restProps }) => {
  const { colors } = useTheme();

  const baseClassName = useMemo(
    () => css`
      background: transparent;
      color: ${colors.neutral[600]};
      border: none;
      outline: none;
      padding: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3px;
      transition: color 0.15s ease, background 0.15s ease;

      &:hover {
        color: ${colors.neutral[800]};
        background: ${colors.neutral[300]};
      }

      &:active {
        background: ${colors.neutral[400]};
      }

      &:disabled {
        pointer-events: none;
        cursor: default;
        opacity: 0.4;
      }
    `,
    [colors],
  );

  const dangerClassName = useMemo(
    () => css`
      color: ${colors.danger.main};

      &:hover {
        color: ${colors.danger.dark};
        background: ${colors.danger.light};
      }

      &:active {
        background: ${colors.danger.main};
        color: ${colors.danger.light};
      }
    `,
    [colors],
  );

  const primaryClassName = useMemo(
    () => css`
      color: ${colors.primary.main};

      &:hover {
        color: ${colors.primary.dark};
        background: ${colors.primary.light};
      }

      &:active {
        background: ${colors.primary.main};
        color: ${colors.primary.contrast};
      }
    `,
    [colors],
  );

  const variantClassNames = {
    default: '',
    danger: dangerClassName,
    primary: primaryClassName,
  };

  return (
    <button type="button" className={cx(baseClassName, variantClassNames[variant])} {...restProps}>
      {children}
    </button>
  );
};
