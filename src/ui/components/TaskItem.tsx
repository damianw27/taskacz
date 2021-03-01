import React, { ReactElement } from "react";
import Task from "../../types/Task"
import css from '../styles/TaskModule.css';
import { CSSProperties } from 'react';

interface TaskItemProps {
  task: Task;
  onTaskDoneChange(taskId: number, isDone: boolean): void;
  onTaskDelete(taskId: number): void;
}

function TaskItem({ task, onTaskDoneChange, onTaskDelete }: TaskItemProps): ReactElement {
  const containerStyle: CSSProperties = {
    backgroundColor: task.isDone ? "rgba(100, 255, 100, 0.2)" : "white",
  };

  const textStyle: CSSProperties = {
    textDecoration: task.isDone ? "line-through" : "none",
  };

  return (
    <div className={css.taskItem} style={containerStyle}>
      <span className={css.taskItemLabel} style={textStyle}>{task.label}</span>
      <button
        type="button"
        onClick={() => onTaskDoneChange(task.id, !task.isDone)}
        className={css.taskItemDoneButton}
        disabled={task.isDone}
      >
        Done
      </button>
      <button
        type="button"
        onClick={() => onTaskDelete(task.id)}
        className={css.taskItemDoneButton}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
