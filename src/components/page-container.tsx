import { css } from '@emotion/css';
import type { FC, ReactNode } from 'react';

const className = css`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

interface Props {
  readonly children: ReactNode;
  readonly ariaLabelledBy: string;
}

export const PageContainer: FC<Props> = ({ children, ariaLabelledBy }) => (
  <section className={className} aria-labelledby={ariaLabelledBy}>
    {children}
  </section>
);
