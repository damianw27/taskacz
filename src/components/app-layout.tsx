import { css } from '@emotion/css';
import { type FC, memo, useEffect, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { TabButton } from '@/components/tab-button';
import { TabButtonGroup } from '@/components/tab-button-group';
import { useLocale } from '@/i18n/hooks/locale';
import { FolderIcon } from '@/icons/folder-icon';
import { ListCheckIcon } from '@/icons/list-check-icon';
import { SettingsIcon } from '@/icons/settings-icon';
import { useApi } from '@/modules/api/hooks/use-api';
import { useTheme } from '@/modules/theme/hooks/use-theme';
import { useProjects } from '@/states/projects';

const tabContentClassName = css`
  position: relative;
  display: flex;
  background: transparent;
  padding: 10px;
  flex: 1;
  overflow: hidden;
`;

export const AppLayout: FC = memo(() => {
  const { t } = useLocale();
  const { colors } = useTheme();
  const { projectService } = useApi();
  const isLoaded = useProjects(state => state.isLoaded);
  const setProjects = useProjects(state => state.setProjects);

  useEffect(() => {
    if (isLoaded) return;
    projectService.loadProjects().then(setProjects);
  }, [isLoaded, projectService, setProjects]);

  const layoutClassName = useMemo(
    () => css`
      display: flex;
      height: 100%;
      width: 100%;
      position: fixed;
      margin: 0;
      background: ${colors.tab.background};
    `,
    [colors],
  );

  return (
    <div className={layoutClassName}>
      <TabButtonGroup
        bottomChildren={
          <TabButton
            to="/settings"
            label={t('navigation.settings')}
            icon={<SettingsIcon width="30px" height="30px" />}
          />
        }
      >
        <TabButton
          to="/"
          label={t('navigation.tasks')}
          icon={<ListCheckIcon width="30px" height="30px" />}
        />
        <TabButton
          to="/projects"
          label={t('navigation.projects')}
          icon={<FolderIcon width="30px" height="30px" />}
        />
      </TabButtonGroup>
      <main className={tabContentClassName}>
        <Outlet />
      </main>
    </div>
  );
});

AppLayout.displayName = 'AppLayout';
