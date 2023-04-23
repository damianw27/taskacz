import React, { ReactElement } from 'react';
import css from './styles/tasks.css';
import { TaskItem } from '@ui/tasks/task-item';
import { Task } from '@type/task';

interface TaskListProps {
  tasks: Task[];
  onTaskDoneChange: (taskId: number, isDone: boolean) => void;
  onTaskDelete: (taskId: number) => void;
}

export const TaskList = ({ tasks, onTaskDoneChange, onTaskDelete }: TaskListProps): ReactElement => {
  function getTaskItems(): ReactElement[] {
    return tasks.map((task: Task, index: number) => (
      <TaskItem key={index} task={task} onTaskDoneChange={onTaskDoneChange} onTaskDelete={onTaskDelete} />
    ));
  }

  return <ul className={css.tasksList}>{getTaskItems()}</ul>;
};
