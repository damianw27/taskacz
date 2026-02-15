import { type FC, memo, type ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { useApi } from '@/modules/api/hooks/use-api';
import { themes } from '@/modules/theme/consts/themes';
import { ThemeContext } from '@/modules/theme/contexts/theme-context';
import { Theme } from '@/modules/theme/types/enums/theme';
import type { ThemeColors } from '@/modules/theme/types/theme-colors';
import type { ThemeContextValue } from '@/modules/theme/types/theme-context-value';

interface ThemeProviderProps {
  readonly children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = memo(({ children }) => {
  const { appSettingsService } = useApi();
  const [theme, setThemeState] = useState<Theme>(Theme.Light);

  useEffect(() => {
    const loadTheme = async (): Promise<void> => {
      const { theme: storedTheme } = await appSettingsService.getSettings();
      setThemeState(storedTheme === Theme.Dark ? Theme.Dark : Theme.Light);
    };

    void loadTheme();
  }, [appSettingsService]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    void (async () => {
      const settings = await appSettingsService.getSettings();
      await appSettingsService.setSettings({ ...settings, theme: newTheme });
    })();
  }, [appSettingsService]);

  const toggleTheme = useCallback(() => {
    setThemeState(current => {
      const next = current === Theme.Light ? Theme.Dark : Theme.Light;
      void (async () => {
        const settings = await appSettingsService.getSettings();
        await appSettingsService.setSettings({ ...settings, theme: next });
      })();
      return next;
    });
  }, [appSettingsService]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const colors = useMemo<ThemeColors>(() => themes[theme], [theme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      colors,
      toggleTheme,
      setTheme,
    }),
    [theme, colors, toggleTheme, setTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
});

ThemeProvider.displayName = 'ThemeProvider';
