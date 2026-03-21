/** biome-ignore-all lint/a11y/noStaticElementInteractions: Double-click to edit project name */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: Double-click to edit project name */
import { css } from '@emotion/css';
import {
  type FC,
  type FocusEvent,
  type KeyboardEvent,
  memo,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { IconButton } from '@/components/icon-button';
import { TextBox } from '@/components/text-box';
import { Tooltip } from '@/components/tooltip';
import { TrashIcon } from '@/icons/trash-icon';
import { useTheme } from '@/modules/theme/hooks/use-theme';
import { useProjects } from '@/states/projects';
import { useTasks } from '@/states/tasks';
import type { Project } from '@/types/project';

interface Props {
  readonly project: Project;
}

export const ProjectItem: FC<Props> = memo(({ project }) => {
  const { colors } = useTheme();
  const updateProject = useProjects(state => state.updateProject);
  const removeProject = useProjects(state => state.removeProject);
  const tasks = useTasks(state => state.tasks);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editColor, setEditColor] = useState(project.color);

  const taskCount = useMemo(
    () => tasks.filter(t => t.projectId === project.id).length,
    [tasks, project.id],
  );

  const itemClassName = useMemo(
    () => css`
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 10px;
      background: ${colors.neutral[50]};
      border: 2px solid ${colors.neutral[400]};
      border-left: 4px solid ${project.color};
      border-radius: 4px;
      transition: border-color 0.15s ease;

      &:hover {
        border-color: ${colors.neutral[500]};
        border-left-color: ${project.color};
      }
    `,
    [project.color, colors],
  );

  const colorSwatch = useMemo(
    () => css`
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: ${project.color};
      flex-shrink: 0;
      cursor: pointer;
      border: 2px solid ${colors.neutral[400]};
      padding: 0;
      position: relative;
      overflow: hidden;

      input[type='color'] {
        position: absolute;
        inset: 0;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        border: none;
        padding: 0;
      }
    `,
    [project.color, colors],
  );

  const nameClassName = useMemo(
    () => css`
      flex: 1;
      font-size: 13px;
      font-weight: 600;
      color: ${colors.neutral[800]};
      word-break: break-word;
    `,
    [colors],
  );

  const taskCountClassName = useMemo(
    () => css`
      font-size: 11px;
      font-weight: 700;
      color: ${colors.neutral[600]};
      background: ${colors.neutral[300]};
      border: 1px solid ${colors.neutral[400]};
      border-radius: 10px;
      padding: 2px 8px;
      flex-shrink: 0;
    `,
    [colors],
  );

  const handleNameKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        updateProject({ ...project, name: event.currentTarget.value, color: editColor });
        setIsEditMode(false);
      }
      if (event.key === 'Escape') {
        setIsEditMode(false);
        setEditColor(project.color);
      }
    },
    [updateProject, project, editColor],
  );

  const handleNameBlur = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      updateProject({ ...project, name: event.currentTarget.value, color: editColor });
      setIsEditMode(false);
    },
    [updateProject, project, editColor],
  );

  const handleColorChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setEditColor(event.target.value);
  }, []);

  const handleColorBlur = useCallback(() => {
    updateProject({ ...project, color: editColor });
  }, [updateProject, project, editColor]);

  const handleRemove = useCallback(() => {
    removeProject(project.id);
  }, [removeProject, project.id]);

  const enterEditMode = useCallback(() => {
    setEditColor(project.color);
    setIsEditMode(true);
  }, [project.color]);

  return (
    <li className={itemClassName}>
      <Tooltip text="Click to change color" position="right">
        <div className={colorSwatch}>
          <input
            type="color"
            value={editColor}
            onChange={handleColorChange}
            onBlur={handleColorBlur}
          />
        </div>
      </Tooltip>
      <div className={nameClassName}>
        {isEditMode ? (
          <TextBox
            defaultValue={project.name}
            onKeyDown={handleNameKeyDown}
            onBlur={handleNameBlur}
            autoFocus
          />
        ) : (
          <span onDoubleClick={enterEditMode}>{project.name}</span>
        )}
      </div>
      <span className={taskCountClassName}>{taskCount}</span>
      <IconButton onClick={handleRemove} variant="danger">
        <TrashIcon width="14px" height="14px" />
      </IconButton>
    </li>
  );
});

ProjectItem.displayName = 'ProjectItem';
