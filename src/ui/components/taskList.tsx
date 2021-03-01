import Task from '../../types/task';
import React, { ReactElement } from 'react';
import TaskItem from './taskItem';
import taskStyles from '../styles/tasks';

interface TaskListProps {
  tasks: Task[];
  onTaskDone(task: Task): void;
}

function TaskList({ tasks, onTaskDone }: TaskListProps): ReactElement {
  function getTaskItems(): ReactElement[] {
    return tasks
      .map((task: Task, index: number) => <TaskItem key={index} task={task} onTaskDone={onTaskDone} />)
  }

  return (
    <div style={taskStyles.tasksList}>
      {getTaskItems()}
    </div>
  );
}

export default TaskList;
