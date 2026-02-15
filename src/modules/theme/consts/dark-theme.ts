import type { ThemeColors } from '@/modules/theme/types/theme-colors';

export const darkTheme: ThemeColors = {
  primary: {
    main: '#10b981',
    dark: '#059669',
    darker: '#047857',
    light: '#065f46',
    lighter: '#047857',
    contrast: '#ecfdf5',
  },
  accent: {
    main: '#f59e0b',
    dark: '#d97706',
    light: '#fbbf24',
    lighter: '#fcd34d',
  },
  danger: {
    main: '#f59e0b',
    dark: '#d97706',
    darker: '#b45309',
    light: '#451a03',
  },
  neutral: {
    50: '#1c1917',
    100: '#1f1c1a',
    200: '#292524',
    300: '#2d2a26',
    400: '#44403c',
    500: '#57534e',
    600: '#78716c',
    700: '#a8a29e',
    800: '#d6d3d1',
    900: '#f5f5f4',
  },
  tab: {
    inactive: '#78716c',
    active: '#fbbf24',
    background: '#1f1c1a',
    menuBackground: '#0f0e0d',
  },
  alpha: {
    accentLight: 'rgba(245, 158, 11, 0.15)',
    accentMedium: 'rgba(245, 158, 11, 0.25)',
  },
  tooltip: {
    shadowColor: '#b4530966',
  },
} as const;
