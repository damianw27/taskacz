import { css } from '@emotion/css';
import { forwardRef, type InputHTMLAttributes, useMemo } from 'react';
import { useTheme } from '@/modules/theme/hooks/use-theme';

type Props = InputHTMLAttributes<HTMLInputElement>;

export const TextBox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { colors } = useTheme();

  const className = useMemo(
    () => css`
      padding: 8px 12px;
      display: inline-block;
      border: 2px solid ${colors.neutral[400]};
      border-radius: 3px;
      box-sizing: border-box;
      outline: none;
      background-color: ${colors.neutral[50]};
      font-size: 14px;
      color: ${colors.neutral[800]};
      transition: border-color 0.15s ease;


      &::placeholder {
        color: ${colors.neutral[600]};
      }

      &:focus {
        border-color: ${colors.accent.main};
      }

      &:hover:not(:focus) {
        border-color: ${colors.neutral[500]};
      }
    `,
    [colors],
  );

  return <input ref={ref} className={className} type="text" {...props} />;
});

TextBox.displayName = 'TextBox';
