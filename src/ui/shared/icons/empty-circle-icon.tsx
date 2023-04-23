import React, { ReactElement } from 'react';
import { defaultSharedIconProps, SharedIconProps } from '@ui/shared/icons/types/shared-icon-props';
import css from '@ui/shared/icons/styles/shared-icon.css';

export const EmptyCircleIcon = (props: SharedIconProps): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="currentColor"
    className={css.dwIcon}
    viewBox="0 0 16 16"
    onClick={props.onClick}
  >
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
  </svg>
);

EmptyCircleIcon.defaultProps = {
  ...defaultSharedIconProps,
};
