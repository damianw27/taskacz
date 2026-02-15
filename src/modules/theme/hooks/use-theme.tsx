import { useContext } from 'react';
import { ThemeContext } from '@/modules/theme/contexts/theme-context';
import type { ThemeContextValue } from '@/modules/theme/types/theme-context-value';

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
