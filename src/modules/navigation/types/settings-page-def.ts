import type { FC, LazyExoticComponent } from 'react';

export interface SettingsPageDef {
  readonly label: string;
  readonly component: LazyExoticComponent<FC>;
}
