import { css } from '@emotion/css';
import {
  type ChangeEvent,
  type FC,
  type KeyboardEvent,
  memo,
  type SubmitEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Button } from '@/components/button';
import { TextBox } from '@/components/text-box';
import { Tooltip } from '@/components/tooltip';
import { useLocale } from '@/i18n/hooks/locale';
import { PlusIcon } from '@/icons/plus-icon';
import { useTheme } from '@/modules/theme/hooks/use-theme';
import { useProjects } from '@/states/projects';

const DEFAULT_PROJECT_COLOR = '#6366f1';

export const ProjectInput: FC = memo(() => {
  const { t } = useLocale();
  const { colors } = useTheme();
  const addProject = useProjects(state => state.addProject);
  const [projectName, setProjectName] = useState('');
  const [projectColor, setProjectColor] = useState(DEFAULT_PROJECT_COLOR);
  const textFieldRef = useRef<HTMLInputElement>(null);

  const containerClassName = useMemo(
    () => css`
      display: flex;
      width: 100%;
      gap: 10px;
      padding: 12px;
      background: ${colors.neutral[300]};
      border: 2px solid ${colors.neutral[400]};
      border-top: 2px solid ${colors.accent.main};
      border-radius: 0 0 4px 4px;
      align-items: center;
    `,
    [colors],
  );

  const colorInputClassName = useMemo(
    () => css`
      width: 34px;
      height: 34px;
      border: 2px solid ${colors.neutral[400]};
      padding: 2px;
      cursor: pointer;
      border-radius: 4px;
      background: transparent;
      flex-shrink: 0;
      transition: border-color 0.15s ease;

      &:hover {
        border-color: ${colors.accent.main};
      }

      &::-webkit-color-swatch-wrapper {
        padding: 0;
      }

      &::-webkit-color-swatch {
        border: none;
        border-radius: 2px;
      }
    `,
    [colors],
  );

  const handleAdd = useCallback(() => {
    if (!projectName.trim()) return;

    addProject({
      id: Date.now(),
      name: projectName.trim(),
      color: projectColor,
    });

    setProjectName('');
    setProjectColor(DEFAULT_PROJECT_COLOR);
    textFieldRef.current?.focus();
  }, [addProject, projectName, projectColor]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && projectName.trim()) {
        handleAdd();
        event.preventDefault();
      }
    },
    [handleAdd, projectName],
  );

  const handleNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setProjectName(event.target.value);
  }, []);

  const handleColorChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setProjectColor(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event: SubmitEvent<HTMLFormElement>) => {
      event.preventDefault();
      handleAdd();
    },
    [handleAdd],
  );

  const isDisabled = useMemo(() => !projectName.trim(), [projectName]);

  return (
    <form className={containerClassName} onSubmit={handleSubmit}>
      <Tooltip text={t('projects.colorLabel')} position="top">
        <input
          type="color"
          value={projectColor}
          onChange={handleColorChange}
          className={colorInputClassName}
        />
      </Tooltip>
      <TextBox
        ref={textFieldRef}
        placeholder={t('projects.addNewProject')}
        onChange={handleNameChange}
        onKeyDown={handleKeyDown}
        value={projectName}
        autoFocus
        style={{ flex: 1 }}
      />
      <Button type="submit" disabled={isDisabled}>
        <PlusIcon />
      </Button>
    </form>
  );
});

ProjectInput.displayName = 'ProjectInput';
