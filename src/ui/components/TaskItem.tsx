import React, { ReactElement } from "react";
import Task from "../../types/Task"
import css from '../styles/TaskModule.css';
import { CSSProperties } from 'react';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

interface TaskItemProps {
  task: Task;
  onTaskDoneChange(taskId: number, isDone: boolean): void;
  onTaskDelete(taskId: number): void;
}

function TaskItem({ task, onTaskDoneChange, onTaskDelete }: TaskItemProps): ReactElement {
  const containerStyle: CSSProperties = {
    color: task.isDone ? "rgb(100, 100, 100)" : "rgb(50, 50, 50)"
  };

  const textStyle: CSSProperties = {
    textDecoration: task.isDone ? "line-through" : "none",
  };

  return (
    <div className={css.taskItem} style={containerStyle}>
      {
        task.isDone
          ? <CheckCircleOutlineIcon onClick={() => onTaskDoneChange(task.id, false)} />
          : <RadioButtonUncheckedIcon onClick={() => onTaskDoneChange(task.id, true)} />
      }
      <span className={css.taskItemLabel} style={textStyle}>{task.label}</span>
      <IconButton onClick={() => onTaskDelete(task.id)}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </div>
  );
}

export default TaskItem;
