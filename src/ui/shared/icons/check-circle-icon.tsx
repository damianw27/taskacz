import React, { ReactElement } from 'react';
import { defaultSharedIconProps, SharedIconProps } from '@ui/shared/icons/types/shared-icon-props';
import css from '@ui/shared/icons/styles/shared-icon.css';

export const CheckCircleIcon = (props: SharedIconProps): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="currentColor"
    className={css.dwIcon}
    viewBox="0 0 16 16"
    onClick={props.onClick}
  >
    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
  </svg>
);

CheckCircleIcon.defaultProps = {
  ...defaultSharedIconProps,
};
