import type { FC } from 'react';
import { iconClassName } from '@/icons/styles/icon-style';
import type { SharedIconProps } from '@/types/shared-icon-props';

export const EmptyCircleIcon: FC<SharedIconProps> = ({
  altText = '',
  width = '20px',
  height = '20px',
  onClick = () => {},
}) => (
  <svg
    width={width}
    height={height}
    className={iconClassName}
    viewBox="0 0 16 16"
    onClick={onClick}
    onKeyUp={onClick}
  >
    <title>{altText}</title>
    <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);
