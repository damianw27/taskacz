import React, { ReactElement, useState } from 'react';
import taskStyles from '../styles/tasks';

interface TaskInputProps {
  onTaskAdd(taskLabel: string): void,
}

function TaskInput({ onTaskAdd }: TaskInputProps): ReactElement {
  const [taskLabel, setTaskLabel] = useState<string>("");

  return (
    <div>
      <input
        style={taskStyles.taskInputText}
        onChange={(event) => setTaskLabel(event.target.value)}
        type="text"
      />
      <button
        style={taskStyles.taskInputButton}
        onClick={() => onTaskAdd(taskLabel)}
        type="button"
      >
        Add
      </button>
    </div>
  );
}

export default TaskInput;

