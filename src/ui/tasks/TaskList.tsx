import React, { ReactElement } from "react";
import Task from '../../types/Task';
import css from "./styles/Tasks.css";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onTaskDoneChange(taskId: number, isDone: boolean): void;
  onTaskDelete(taskId: number): void;
}

function TaskList({
  tasks,
  onTaskDoneChange,
  onTaskDelete,
}: TaskListProps): ReactElement {
  function getTaskItems(): ReactElement[] {
    return tasks.map((task: Task, index: number) => (
      <TaskItem
        key={index}
        task={task}
        onTaskDoneChange={onTaskDoneChange}
        onTaskDelete={onTaskDelete}
      />
    ));
  }

  return <ul className={css.tasksList}>{getTaskItems()}</ul>;
}

export default TaskList;
