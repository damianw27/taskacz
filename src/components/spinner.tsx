import { css, keyframes } from '@emotion/css';
import { type FC, memo, useMemo } from 'react';
import { useTheme } from '@/modules/theme/hooks/use-theme';

interface Props {
  readonly size?: number;
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner: FC<Props> = memo(({ size = 32 }) => {
  const { colors } = useTheme();

  const spinnerClassName = useMemo(
    () => css`
      width: ${size}px;
      height: ${size}px;
      border: 3px solid ${colors.neutral[300]};
      border-top-color: ${colors.accent.main};
      border-radius: 50%;
      animation: ${spin} 0.8s linear infinite;
    `,
    [colors, size],
  );

  return <div className={spinnerClassName} />;
});

Spinner.displayName = 'Spinner';
