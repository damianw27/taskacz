import { useCallback, useEffect, useMemo } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import type { NavigationValue } from '@/modules/navigation/types/navigation-value';
import { normalizeSettingsPageKey, useNavigationStore } from '@/states/navigation';

export const useNavigation = (): NavigationValue => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get('page');
  const normalizedPage = normalizeSettingsPageKey(pageParam);
  const settingsPage = useNavigationStore(state => state.settingsPage);
  const setSettingsPageStore = useNavigationStore(state => state.setSettingsPage);

  useEffect(() => {
    if (settingsPage !== normalizedPage) {
      setSettingsPageStore(normalizedPage);
    }
  }, [normalizedPage, settingsPage, setSettingsPageStore]);

  const navigateTo = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate],
  );

  const setSettingsPage = useCallback(
    (page: string) => {
      const nextPage = normalizeSettingsPageKey(page);

      if (settingsPage !== nextPage) {
        setSettingsPageStore(nextPage);
      }

      if (pageParam !== nextPage) {
        setSearchParams({ page: nextPage });
      }
    },
    [settingsPage, pageParam, setSettingsPageStore, setSearchParams],
  );

  const navigateToSettings = useCallback(() => {
    navigate('/settings');
  }, [navigate]);

  const navigateToTasks = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return useMemo(
    () => ({
      currentPath: location.pathname,
      settingsPage,
      navigateTo,
      setSettingsPage,
      navigateToSettings,
      navigateToTasks,
    }),
    [
      location.pathname,
      settingsPage,
      navigateTo,
      setSettingsPage,
      navigateToSettings,
      navigateToTasks,
    ],
  );
};
