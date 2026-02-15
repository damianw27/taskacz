import { css } from '@emotion/css';
import type { FC, ReactNode } from 'react';

const className = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

interface Props {
  readonly children: ReactNode;
}

export const SettingsSection: FC<Props> = ({ children }) => (
  <section className={className}>{children}</section>
);
