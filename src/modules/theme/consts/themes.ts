import { darkTheme } from '@/modules/theme/consts/dark-theme';
import { lightTheme } from '@/modules/theme/consts/light-theme';
import type { Theme } from '@/modules/theme/types/enums/theme';
import type { ThemeColors } from '@/modules/theme/types/theme-colors';

export const themes: Record<Theme, ThemeColors> = {
  light: lightTheme,
  dark: darkTheme,
};
