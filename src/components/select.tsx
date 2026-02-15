import { css } from '@emotion/css';
import { type FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocale } from '@/i18n/hooks/locale';
import { useTheme } from '@/modules/theme/hooks/use-theme';

interface SelectOption {
  value: string;
  label: string;
}

interface Props {
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
}

export const Select: FC<Props> = ({ value, options, onChange }) => {
  const { t } = useLocale();
  const { colors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  const containerClassName = css`
    position: relative;
    display: inline-block;
  `;

  const triggerClassName = useMemo(
    () => css`
      padding: 8px 32px 8px 12px;
      display: flex;
      align-items: center;
      border: 2px solid ${colors.accent.main};
      border-radius: 3px;
      box-sizing: border-box;
      outline: none;
      background-color: ${colors.neutral[200]};
      font-size: 12px;
      font-weight: 700;
      color: ${colors.neutral[800]};
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: border-color 0.15s ease, background-color 0.15s ease;

      cursor: pointer;
      position: relative;
      min-width: 140px;

      &::after {
        content: '';
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%) ${isOpen ? 'rotate(180deg)' : 'rotate(0)'};
        border: 5px solid transparent;
        border-top-color: ${colors.accent.main};
        border-bottom: none;
        transition: transform 0.15s ease;
      }

      &:hover {
        border-color: ${colors.accent.dark};
        background-color: ${colors.neutral[300]};
      }

      &:active {
        transform: translate(1px, 1px);
      }
    `,
    [colors, isOpen],
  );

  const dropdownClassName = useMemo(
    () => css`
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      right: 0;
      background: ${colors.neutral[100]};
      border: 2px solid ${colors.accent.main};
      border-radius: 3px;
      z-index: 1000;
      overflow-x: hidden;
      overflow-y: auto;
      display: ${isOpen ? 'block' : 'none'};
      max-height: 200px;
    `,
    [colors, isOpen],
  );

  const optionClassName = useMemo(
    () => css`
      padding: 8px 12px;
      font-size: 12px;
      font-weight: 600;
      color: ${colors.neutral[800]};

      cursor: pointer;
      transition: background-color 0.1s ease, color 0.1s ease;
      text-transform: uppercase;
      letter-spacing: 1px;

      &:hover {
        background-color: ${colors.accent.light};
        color: ${colors.accent.dark};
      }
    `,
    [colors],
  );

  const selectedOptionClassName = useMemo(
    () => css`
      background-color: ${colors.accent.main};
      color: ${colors.neutral[50]};

      &:hover {
        background-color: ${colors.accent.dark};
        color: ${colors.neutral[50]};
      }
    `,
    [colors],
  );

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={containerClassName}>
      <button type="button" className={triggerClassName} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption?.label ?? t('common.select')}
      </button>
      <div className={dropdownClassName}>
        {options.map(option => (
          <div
            key={option.value}
            className={`${optionClassName} ${option.value === value ? selectedOptionClassName : ''}`}
            onClick={() => handleSelect(option.value)}
            onKeyDown={e => e.key === 'Enter' && handleSelect(option.value)}
            role="option"
            aria-selected={option.value === value}
            tabIndex={0}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};
