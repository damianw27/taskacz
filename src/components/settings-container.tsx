import { css } from '@emotion/css';
import type { FC, ReactNode } from 'react';

const className = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface Props {
  readonly children: ReactNode;
}

export const SettingsContainer: FC<Props> = ({ children }) => (
  <article className={className}>{children}</article>
);
