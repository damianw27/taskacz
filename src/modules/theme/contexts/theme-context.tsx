import { createContext } from 'react';
import type { ThemeContextValue } from '@/modules/theme/types/theme-context-value';

export const ThemeContext = createContext<ThemeContextValue | null>(null);
