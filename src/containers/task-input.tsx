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
import { useLocale } from '@/i18n/hooks/locale';
import { PlusIcon } from '@/icons/plus-icon';
import { useTheme } from '@/modules/theme/hooks/use-theme';
import { useTasks } from '@/states/tasks';

export const TaskInput: FC = memo(() => {
  const { t } = useLocale();
  const { colors } = useTheme();
  const tasks = useTasks(state => state.tasks);
  const addTask = useTasks(state => state.addTask);
  const [taskLabel, setTaskLabel] = useState('');
  const textFieldRef = useRef<HTMLInputElement>(null);

  const taskInputClassName = useMemo(
    () => css`
      display: flex;
      width: 100%;
      gap: 10px;
      padding: 12px;
      background: ${colors.neutral[300]};
      border: 2px solid ${colors.neutral[400]};
      border-top: 2px solid ${colors.accent.main};
      border-radius: 0 0 4px 4px;
    `,
    [colors],
  );

  const handleTaskAdd = useCallback(() => {
    if (!taskLabel.trim()) return;

    addTask({
      id: tasks.length || 0,
      label: taskLabel.trim(),
      isDone: false,
    });

    setTaskLabel('');
    textFieldRef.current?.focus();
  }, [addTask, taskLabel, tasks.length]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && taskLabel.trim()) {
        handleTaskAdd();
        event.preventDefault();
      }
    },
    [handleTaskAdd, taskLabel],
  );

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTaskLabel(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event: SubmitEvent<HTMLFormElement>) => {
      event.preventDefault();
      handleTaskAdd();
    },
    [handleTaskAdd],
  );

  const isDisabled = useMemo(() => !taskLabel.trim(), [taskLabel]);

  return (
    <form className={taskInputClassName} data-guide="task-input" onSubmit={handleSubmit}>
      <TextBox
        ref={textFieldRef}
        placeholder={t('tasks.addNewTask')}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={taskLabel}
        autoFocus
        style={{ flex: 1 }}
      />
      <Button type="submit" disabled={isDisabled}>
        <PlusIcon />
      </Button>
    </form>
  );
});

TaskInput.displayName = 'TaskInput';
