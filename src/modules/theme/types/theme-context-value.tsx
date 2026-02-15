import type { Theme } from '@/modules/theme/types/enums/theme';
import type { ThemeColors } from '@/modules/theme/types/theme-colors';

export interface ThemeContextValue {
  theme: Theme;
  colors: ThemeColors;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}
