import { css } from '@emotion/css';
import { type FC, useMemo } from 'react';
import { useTheme } from '@/modules/theme/hooks/use-theme';

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const ColorPicker: FC<Props> = ({ label, value, onChange }) => {
  const { colors } = useTheme();

  const containerClassName = useMemo(
    () => css`
      display: flex;
      align-items: center;
      gap: 10px;
    `,
    [],
  );

  const labelClassName = useMemo(
    () => css`
      font-size: 12px;
      font-weight: 600;
      color: ${colors.neutral[700]};

      min-width: 80px;
    `,
    [colors],
  );

  const inputWrapperClassName = useMemo(
    () => css`
      display: flex;
      align-items: center;
      gap: 8px;
      background: ${colors.neutral[200]};
      border: 2px solid ${colors.neutral[400]};
      border-radius: 3px;
      padding: 4px 8px;
      transition: border-color 0.15s ease;

      &:hover {
        border-color: ${colors.neutral[500]};
      }

      &:focus-within {
        border-color: ${colors.accent.main};
      }
    `,
    [colors],
  );

  const colorInputClassName = useMemo(
    () => css`
      width: 24px;
      height: 24px;
      border: none;
      padding: 0;
      cursor: pointer;
      border-radius: 2px;
      background: transparent;

      &::-webkit-color-swatch-wrapper {
        padding: 0;
      }

      &::-webkit-color-swatch {
        border: 1px solid ${colors.neutral[500]};
        border-radius: 2px;
      }
    `,
    [colors],
  );

  const textInputClassName = useMemo(
    () => css`
      width: 70px;
      border: none;
      background: transparent;
      font-size: 11px;

      color: ${colors.neutral[800]};
      text-transform: uppercase;
      outline: none;
    `,
    [colors],
  );

  return (
    <div className={containerClassName}>
      <span className={labelClassName}>{label}</span>
      <div className={inputWrapperClassName}>
        <input
          type="color"
          value={value}
          onChange={e => onChange(e.target.value)}
          className={colorInputClassName}
        />
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          className={textInputClassName}
          maxLength={7}
        />
      </div>
    </div>
  );
};
