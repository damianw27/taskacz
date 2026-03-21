import { css } from '@emotion/css';
import { type FC, memo, useEffect, useMemo, useRef } from 'react';
import { PageContainer } from '@/components/page-container';
import { PageHeader } from '@/components/page-header';
import { ProjectInput } from '@/containers/project-input';
import { ProjectItem } from '@/containers/project-item';
import { useLocale } from '@/i18n/hooks/locale';
import { FolderIcon } from '@/icons/folder-icon';
import { useApi } from '@/modules/api/hooks/use-api';
import { useTheme } from '@/modules/theme/hooks/use-theme';
import { getVerticalScrollbarStyle } from '@/modules/theme/utils/scrollbar-style';
import { useProjects } from '@/states/projects';
import type { Project } from '@/types/project';

const MemoizedProjectItem = memo(ProjectItem);

export const ProjectsPage: FC = memo(() => {
  const { t } = useLocale();
  const { colors } = useTheme();
  const { projectService } = useApi();
  const projects = useProjects(state => state.projects);
  const isLoaded = useProjects(state => state.isLoaded);
  const latestProjectsRef = useRef(projects);

  const projectCountClassName = useMemo(
    () => css`
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      color: ${colors.neutral[700]};
      background: ${colors.neutral[300]};
      padding: 6px 12px;
      border-radius: 10px;
      font-weight: 600;
      border: 1px solid ${colors.neutral[400]};
    `,
    [colors],
  );

  const projectsListClassName = useMemo(
    () => css`
      width: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 4px 0;
      margin: 0;
      list-style: none;
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
      ${getVerticalScrollbarStyle(colors)}
    `,
    [colors],
  );

  const emptyStateClassName = useMemo(
    () => css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      flex: 1;
      color: ${colors.neutral[500]};
      font-size: 13px;
      font-weight: 500;
    `,
    [colors],
  );

  useEffect(() => {
    latestProjectsRef.current = projects;
  }, [projects]);

  useEffect(() => {
    if (!isLoaded) return;

    const timeoutId = setTimeout(async () => {
      await projectService.saveProjects(projects);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [projects, projectService, isLoaded]);

  useEffect(() => {
    return () => {
      if (isLoaded) {
        void projectService.saveProjects(latestProjectsRef.current);
      }
    };
  }, [projectService, isLoaded]);

  return (
    <PageContainer ariaLabelledBy="projects-page-title">
      <PageHeader
        titleId="projects-page-title"
        title={t('projects.title')}
        rightContent={
          <span className={projectCountClassName}>
            <FolderIcon width="14px" height="14px" />
            {projects.length}
          </span>
        }
      />
      {projects.length === 0 ? (
        <div className={emptyStateClassName}>
          <FolderIcon width="40px" height="40px" />
          <span>{t('projects.emptyState')}</span>
        </div>
      ) : (
        <ul className={projectsListClassName}>
          {projects.map((project: Project) => (
            <MemoizedProjectItem key={project.id} project={project} />
          ))}
        </ul>
      )}
      <ProjectInput />
    </PageContainer>
  );
});

ProjectsPage.displayName = 'ProjectsPage';
