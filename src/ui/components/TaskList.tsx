import Task from '../../types/Task';
import React, { ReactElement } from 'react';
import TaskItem from './TaskItem';
import css from '../styles/TaskModule.css';

interface TaskListProps {
  tasks: Task[];
  onTaskDoneChange(taskId: number, isDone: boolean): void;
  onTaskDelete(taskId: number): void;
}

function TaskList({ tasks, onTaskDoneChange, onTaskDelete }: TaskListProps): ReactElement {
  function getTaskItems(): ReactElement[] {
    return tasks
      .map((task: Task, index: number) => (
        <TaskItem
          key={index}
          task={task}
          onTaskDoneChange={onTaskDoneChange}
          onTaskDelete={onTaskDelete}
        />
      ));
  }

  return (
    <div className={css.tasksList}>
      {getTaskItems()}
    </div>
  );
}

export default TaskList;
