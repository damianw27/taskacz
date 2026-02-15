export interface ThemeColors {
  primary: {
    main: string;
    dark: string;
    darker: string;
    light: string;
    lighter: string;
    contrast: string;
  };
  accent: {
    main: string;
    dark: string;
    light: string;
    lighter: string;
  };
  danger: {
    main: string;
    dark: string;
    darker: string;
    light: string;
  };
  neutral: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  tab: {
    inactive: string;
    active: string;
    background: string;
    menuBackground: string;
  };
  alpha: {
    accentLight: string;
    accentMedium: string;
  };
  tooltip: {
    shadowColor: string;
  };
}
