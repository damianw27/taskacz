import { css } from '@emotion/css';

export const iconClassName = css`
  display: inline-block;
  vertical-align: -0.125em;
  fill: currentcolor;
  transition: opacity 0.15s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;
