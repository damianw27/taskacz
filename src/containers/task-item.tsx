/** biome-ignore-all lint/a11y/noStaticElementInteractions: For now the app uses the onDoubleClick on task label */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: For now the app uses the onDoubleClick on task label */
import { useSortable } from '@dnd-kit/sortable';
import { css, cx } from '@emotion/css';
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
import { CheckCircleIcon } from '@/icons/check-circle-icon';
import { EmptyCircleIcon } from '@/icons/empty-circle-icon';
import { GripIcon } from '@/icons/grip-icon';
import { TrashIcon } from '@/icons/trash-icon';
import { useTheme } from '@/modules/theme/hooks/use-theme';
import { useTasks } from '@/states/tasks';
import type { Task } from '@/types/task';

interface Props {
  readonly task: Task;
}

export const TaskItem: FC<Props> = memo(({ task }) => {
  const { colors } = useTheme();
  const updateTask = useTasks(state => state.updateTask);
  const removeTask = useTasks(state => state.removeTask);
  const [isEditMode, setIsEditMode] = useState(false);

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: task.id,
  });

  const style = useMemo(
    () => ({
      transform: transform ? `translate3d(0, ${transform.y}px, 0)` : undefined,
      transition,
    }),
    [transform, transition],
  );

  const taskItemClassName = useMemo(
    () => css`
      padding: 6px 10px;
      color: ${task.isDone ? colors.neutral[600] : colors.neutral[800]};
      background: ${task.isDone ? colors.neutral[200] : colors.neutral[50]};
      display: flex;
      align-items: center;
      gap: 8px;
      border: 2px solid ${task.isDone ? colors.neutral[400] : colors.accent.main};
      border-radius: 4px;
      transition: border-color 0.15s ease, opacity 0.15s ease;


      &:hover {
        border-color: ${task.isDone ? colors.neutral[500] : colors.accent.dark};
      }
    `,
    [task.isDone, colors],
  );

  const draggingClassName = useMemo(
    () => css`
      opacity: 0.5;
    `,
    [],
  );

  const dragHandleClassName = useMemo(
    () => css`
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${colors.neutral[500]};
      cursor: grab;
      touch-action: none;
      flex-shrink: 0;

      &:hover {
        color: ${colors.neutral[700]};
      }

      &:active {
        cursor: grabbing;
      }
    `,
    [colors],
  );

  const checkIndicatorClassName = useMemo(
    () => css`
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 18px;
      height: 18px;
      flex-shrink: 0;
      color: ${task.isDone ? colors.primary.main : colors.accent.dark};
      transition: color 0.15s ease;

      &:hover {
        color: ${task.isDone ? colors.primary.dark : colors.accent.main};
      }
    `,
    [task.isDone, colors],
  );

  const labelClassName = useMemo(
    () => css`
      text-decoration: ${task.isDone ? 'line-through' : 'none'};
      flex: 1;
      font-size: 13px;
      font-weight: 500;
      line-height: 1.4;
      word-break: break-word;
      opacity: ${task.isDone ? '0.6' : '1'};

    `,
    [task.isDone],
  );

  const toggleDone = useCallback(() => {
    updateTask({ ...task, isDone: !task.isDone });
  }, [updateTask, task]);

  const handleLabelKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        updateTask({ ...task, label: event.currentTarget.value });
        setIsEditMode(false);
      }
    },
    [updateTask, task],
  );

  const handleLabelBlur = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      updateTask({ ...task, label: event.currentTarget.value });
      setIsEditMode(false);
    },
    [updateTask, task],
  );

  const handleRemove = useCallback(() => {
    removeTask(task.id);
  }, [removeTask, task.id]);

  const enterEditMode = useCallback(() => {
    setIsEditMode(true);
  }, []);

  return (
    <li
      ref={setNodeRef}
      style={style}
      className={cx(taskItemClassName, { [draggingClassName]: isDragging })}
      {...attributes}
    >
      <div className={dragHandleClassName} {...listeners}>
        <GripIcon width="14px" height="14px" />
      </div>
      <div className={checkIndicatorClassName} onClick={toggleDone}>
        {task.isDone ? (
          <CheckCircleIcon width="16px" height="16px" />
        ) : (
          <EmptyCircleIcon width="16px" height="16px" />
        )}
      </div>
      <div className={labelClassName}>
        {isEditMode ? (
          <TextBox
            defaultValue={task.label}
            onKeyDown={handleLabelKeyDown}
            onBlur={handleLabelBlur}
            autoFocus
          />
        ) : (
          <span onDoubleClick={enterEditMode}>{task.label}</span>
        )}
      </div>
      <IconButton onClick={handleRemove} variant="danger">
        <TrashIcon width="14px" height="14px" />
      </IconButton>
    </li>
  );
});

TaskItem.displayName = 'TaskItem';
