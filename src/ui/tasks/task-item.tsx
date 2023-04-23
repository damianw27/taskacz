import React, { CSSProperties, FocusEvent, KeyboardEvent, ReactElement, useState } from 'react';
import css from '@ui/tasks/styles/tasks.css';
import { Task } from '@type/task';
import { TextBox } from '@ui/shared/text-box';
import { Button } from '@ui/shared/button';
import { CheckCircleIcon } from '@ui/shared/icons/check-circle-icon';
import { EmptyCircleIcon } from '@ui/shared/icons/empty-circle-icon';

interface TaskItemProps {
  task: Task;
  onTaskDoneChange: (taskId: number, isDone: boolean) => void;
  onTaskDelete: (taskId: number) => void;
}

export const TaskItem = ({ task, onTaskDoneChange, onTaskDelete }: TaskItemProps): ReactElement => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const containerStyle: CSSProperties = {
    color: task.isDone ? 'rgb(100, 100, 100)' : 'rgb(50, 50, 50)',
  };

  const textStyle: CSSProperties = {
    textDecoration: task.isDone ? 'line-through' : 'none',
  };

  const renderCheckIndicator = (): ReactElement =>
    task.isDone ? (
      <CheckCircleIcon onClick={() => onTaskDoneChange(task.id, false)} />
    ) : (
      <EmptyCircleIcon onClick={() => onTaskDoneChange(task.id, true)} />
    );

  const handleTaskLabelChange = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key !== 'Enter') {
      return;
    }

    task.label = event.currentTarget.value;
    setIsEditMode(false);
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>): void => {
    task.label = event.currentTarget.value;
    setIsEditMode(false);
  };

  const renderTaskDescriptor = (): ReactElement =>
    isEditMode ? (
      <TextBox defaultValue={task.label} onKeyDown={handleTaskLabelChange} onBlur={handleFocus} autoFocus />
    ) : (
      <span className={css.taskItemLabel} style={textStyle} onDoubleClick={() => setIsEditMode(true)}>
        {task.label}
      </span>
    );

  return (
    <li className={css.taskItem} style={containerStyle}>
      <div className={css.taskItemCheckIndicatorContainer}>{renderCheckIndicator()}</div>
      <div className={css.taskItemLabelContainer}>{renderTaskDescriptor()}</div>
      <Button onClick={() => onTaskDelete(task.id)} isDanger>
        Delete
      </Button>
    </li>
  );
};
