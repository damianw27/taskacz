import React, { ReactElement, useState } from 'react';
import css from '../styles/TaskModule.css';

interface TaskInputProps {
  onTaskAdd(taskLabel: string): void,
}

function TaskInput({ onTaskAdd }: TaskInputProps): ReactElement {
  const [taskLabel, setTaskLabel] = useState<string>("");

  function handleTaskAdd() {
    onTaskAdd(taskLabel);
    setTaskLabel("");
  }

  return (
    <div className={css.taskInput}>
      <input
        className={css.taskInputText}
        onChange={(event) => setTaskLabel(event.target.value)}
        value={taskLabel}
        type="text"
      />
      <button
        className={css.taskInputButton}
        onClick={handleTaskAdd}
        type="button"
        disabled={taskLabel === ""}
      >
        Add
      </button>
    </div>
  );
}

export default TaskInput;

