import { ReactElement } from 'react';

export interface TabDefinition {
  id: number;
  icon: ReactElement;
  label: string;
  content: ReactElement;
}
