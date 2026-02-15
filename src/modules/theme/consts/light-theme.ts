import type { ThemeColors } from '@/modules/theme/types/theme-colors';

export const lightTheme: ThemeColors = {
  primary: {
    main: '#059669',
    dark: '#047857',
    darker: '#065f46',
    light: '#a7f3d0',
    lighter: '#6ee7b7',
    contrast: '#ecfdf5',
  },
  accent: {
    main: '#d97706',
    dark: '#b45309',
    light: '#fbbf24',
    lighter: '#fcd34d',
  },
  danger: {
    main: '#b45309',
    dark: '#92400e',
    darker: '#78350f',
    light: '#fef3c7',
  },
  neutral: {
    50: '#fffbf5',
    100: '#f5f0e6',
    200: '#ebe6dc',
    300: '#e7e2d9',
    400: '#d6d0c4',
    500: '#c4bdb0',
    600: '#a8a29e',
    700: '#78716c',
    800: '#44403c',
    900: '#2d2a24',
  },
  tab: {
    inactive: '#a89984',
    active: '#fbbf24',
    background: '#f5f0e6',
    menuBackground: '#2d2a24',
  },
  alpha: {
    accentLight: 'rgba(217, 119, 6, 0.15)',
    accentMedium: 'rgba(217, 119, 6, 0.2)',
  },
  tooltip: {
    shadowColor: '#78350f66',
  },
} as const;
