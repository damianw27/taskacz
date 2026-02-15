import type { Theme } from '@/modules/theme/types/enums/theme';

export interface AppSettings {
  language?: string;
  theme?: Theme;
  guideCompleted?: boolean;
}
