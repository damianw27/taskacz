import type { FC } from 'react';
import { iconClassName } from '@/icons/styles/icon-style';
import type { SharedIconProps } from '@/types/shared-icon-props';

export const GripIcon: FC<SharedIconProps> = ({ altText = '', width = '16px', height = '16px', onClick }) => (
  <svg
    width={width}
    height={height}
    fill="currentColor"
    className={iconClassName}
    viewBox="0 0 16 16"
    onClick={onClick}
    onKeyUp={onClick}
    style={{ cursor: onClick ? 'pointer' : 'grab' }}
  >
    <title>{altText}</title>
    <circle cx="5" cy="4" r="1.5" />
    <circle cx="11" cy="4" r="1.5" />
    <circle cx="5" cy="8" r="1.5" />
    <circle cx="11" cy="8" r="1.5" />
    <circle cx="5" cy="12" r="1.5" />
    <circle cx="11" cy="12" r="1.5" />
  </svg>
);
