import React, { ReactElement, useRef, useState } from 'react';
import css from './styles/tasks.css';
import { TextBox } from '@ui/shared/text-box';
import { Button } from '@ui/shared/button';

interface TaskInputProps {
  onTaskAdd: (taskLabel: string) => void;
}

export const TaskInput = ({ onTaskAdd }: TaskInputProps): ReactElement => {
  const [taskDescription, setTaskDescription] = useState<string>('');
  const textFieldRef = useRef<HTMLInputElement>();

  const handleTaskAdd = () => {
    onTaskAdd(taskDescription);
    setTaskDescription('');
    textFieldRef?.current?.focus();
  };

  const shouldBreakKeyDownMethod = (event: React.KeyboardEvent): boolean =>
    event.key !== 'Enter' || taskDescription === '';

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (shouldBreakKeyDownMethod(event)) {
      return;
    }

    handleTaskAdd();
    event.preventDefault();
  };

  return (
    <div className={css.taskInput}>
      <TextBox
        placeholder="Add new task"
        onChange={(event) => setTaskDescription(event.target.value)}
        onKeyDown={handleKeyDown}
        value={taskDescription}
        autoFocus
        style={{ flex: 1 }}
      />
      <Button onClick={handleTaskAdd} disabled={taskDescription === ''}>
        Add
      </Button>
    </div>
  );
};
