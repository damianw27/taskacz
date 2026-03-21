import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { css } from '@emotion/css';
import {
  type ChangeEvent,
  type FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { PageContainer } from '@/components/page-container';
import { PageHeader } from '@/components/page-header';
import { TaskInput } from '@/containers/task-input';
import { TaskItem } from '@/containers/task-item';
import { useLocale } from '@/i18n/hooks/locale';
import { CheckCircleIcon } from '@/icons/check-circle-icon';
import { EmptyCircleIcon } from '@/icons/empty-circle-icon';
import { SearchIcon } from '@/icons/search-icon';
import { useApi } from '@/modules/api/hooks/use-api';
import { useTheme } from '@/modules/theme/hooks/use-theme';
import { getVerticalScrollbarStyle } from '@/modules/theme/utils/scrollbar-style';
import { useTasks } from '@/states/tasks';
import type { Task } from '@/types/task';

const countItemClassName = css`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const MemoizedTaskItem = memo(TaskItem);

export const TasksPage: FC = memo(() => {
  const { t } = useLocale();
  const { colors } = useTheme();
  const { taskService } = useApi();
  const tasks = useTasks(state => state.tasks);
  const setTasks = useTasks(state => state.setTasks);
  const reorderTasks = useTasks(state => state.reorderTasks);
  const [isInitLoad, setIsInitLoad] = useState(true);
  const [searchPhrase, setSearchPhrase] = useState('');
  const latestTasksRef = useRef(tasks);
  const isInitLoadRef = useRef(isInitLoad);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const taskCountClassName = useMemo(
    () => css`
      display: flex;
      align-items: center;
      gap: 12px;
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

  const pendingCountClassName = useMemo(
    () => css`
      color: ${colors.accent.dark};
    `,
    [colors],
  );

  const completedCountClassName = useMemo(
    () => css`
      color: ${colors.primary.main};
    `,
    [colors],
  );

  const searchContainerClassName = useMemo(
    () => css`
      display: flex;
      align-items: center;
      gap: 8px;
      background: ${colors.neutral[50]};
      border: 2px solid ${colors.neutral[400]};
      border-radius: 4px;
      padding: 0 12px;
      color: ${colors.neutral[600]};

      &:focus-within {
        border-color: ${colors.accent.main};
        color: ${colors.accent.dark};
      }
    `,
    [colors],
  );

  const searchInputClassName = useMemo(
    () => css`
      flex: 1;
      border: none;
      background: transparent;
      outline: none;
      padding: 8px 0;
      font-size: 14px;
      color: ${colors.neutral[800]};

      &::placeholder {
        color: ${colors.neutral[600]};
      }
    `,
    [colors],
  );

  const tasksListClassName = useMemo(
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

  const filteredTasks = useMemo(() => {
    const filtered = searchPhrase
      ? tasks.filter(task => task.label.toLowerCase().includes(searchPhrase.toLowerCase()))
      : tasks;
    return [...filtered].sort((a, b) => Number(a.isDone) - Number(b.isDone));
  }, [tasks, searchPhrase]);

  const taskIds = useMemo(() => filteredTasks.map(t => t.id), [filteredTasks]);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (over && active.id !== over.id) {
        reorderTasks(active.id as number, over.id as number);
      }
    },
    [reorderTasks],
  );

  const onSearchPhraseChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchPhrase(event.target.value);
  }, []);

  useEffect(() => {
    latestTasksRef.current = tasks;
    isInitLoadRef.current = isInitLoad;
  }, [tasks, isInitLoad]);

  useEffect(() => {
    if (!isInitLoad) return;

    taskService.loadTasks().then(loadedTasks => {
      setTasks(loadedTasks);
      setIsInitLoad(false);
    });
  }, [isInitLoad, setTasks, taskService]);

  useEffect(() => {
    if (isInitLoad) return;

    const timeoutId = setTimeout(async () => {
      await taskService.saveTasks(tasks);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [tasks, taskService, isInitLoad]);

  useEffect(() => {
    return () => {
      if (!isInitLoadRef.current) {
        void taskService.saveTasks(latestTasksRef.current);
      }
    };
  }, [taskService]);

  const { pendingCount, completedCount } = useMemo(() => {
    let pending = 0;
    let completed = 0;
    for (const task of tasks) {
      if (task.isDone) completed++;
      else pending++;
    }
    return { pendingCount: pending, completedCount: completed };
  }, [tasks]);

  return (
    <PageContainer ariaLabelledBy="tasks-page-title">
      <PageHeader
        titleId="tasks-page-title"
        title={t('tasks.title')}
        rightContent={
          <span className={taskCountClassName}>
            <span className={`${countItemClassName} ${pendingCountClassName}`}>
              <EmptyCircleIcon width="14px" height="14px" />
              {pendingCount}
            </span>
            <span className={`${countItemClassName} ${completedCountClassName}`}>
              <CheckCircleIcon width="14px" height="14px" />
              {completedCount}
            </span>
          </span>
        }
      />
      <section className={searchContainerClassName} data-guide="search" aria-label="Task search">
        <SearchIcon width="14px" height="14px" />
        <input
          type="text"
          className={searchInputClassName}
          placeholder={t('tasks.searchPlaceholder')}
          onChange={onSearchPhraseChange}
          value={searchPhrase}
        />
      </section>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={taskIds} strategy={verticalListSortingStrategy}>
          <ul className={tasksListClassName} data-guide="task-list">
            {filteredTasks.map((task: Task) => (
              <MemoizedTaskItem key={task.id} task={task} />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
      <TaskInput />
    </PageContainer>
  );
});

TasksPage.displayName = 'TasksPage';
