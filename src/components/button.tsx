import { css, cx } from '@emotion/css';
import { type ButtonHTMLAttributes, type DetailedHTMLProps, forwardRef, useMemo } from 'react';
import { useTheme } from '@/modules/theme/hooks/use-theme';

type DefaultButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface Props extends DefaultButtonProps {
  isDanger?: boolean;
  isCompact?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ isDanger = false, isCompact = false, children, ...restProps }, ref) => {
    const { colors } = useTheme();

    const className = useMemo(
      () => css`
        background: ${colors.primary.main};
        color: ${colors.primary.contrast};
        border: 2px solid ${colors.primary.dark};
        outline: none;
        padding: 8px;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: background 0.15s ease, border-color 0.15s ease;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3px;

        &:hover {
          background: ${colors.primary.dark};
          border-color: ${colors.primary.darker};
        }

        &:active {
          background: ${colors.primary.darker};
        }

        &:disabled {
          pointer-events: none;
          cursor: default;
          background: ${colors.primary.light};
          border-color: ${colors.primary.lighter};
          color: ${colors.primary.darker};
        }
      `,
      [colors],
    );

    const compactClassName = css`
      padding: 4px 6px;
      font-size: 10px;
    `;

    const dangerClassName = useMemo(
      () => css`
        background: ${colors.danger.main};
        border-color: ${colors.danger.dark};
        color: ${colors.danger.light};

        &:hover {
          background: ${colors.danger.dark};
          border-color: ${colors.danger.darker};
        }

        &:active {
          background: ${colors.danger.darker};
        }

        &:disabled {
          background: ${colors.accent.lighter};
          border-color: ${colors.accent.light};
          color: ${colors.danger.darker};
        }
      `,
      [colors],
    );

    return (
      <button
        ref={ref}
        type="button"
        className={cx(className, { [dangerClassName]: isDanger, [compactClassName]: isCompact })}
        {...restProps}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
