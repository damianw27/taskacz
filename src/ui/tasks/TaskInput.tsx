import React, { ReactElement, useRef, useState } from "react";
import Button from "../shared/Button";
import TextBox from "../shared/TextBox";
import css from "./styles/Tasks.css";

interface TaskInputProps {
  onTaskAdd(taskLabel: string): void;
}

function TaskInput({ onTaskAdd }: TaskInputProps): ReactElement {
  const [taskDescription, setTaskDescription] = useState<string>("");
  const textFieldRef = useRef<HTMLInputElement>();

  function handleTaskAdd() {
    onTaskAdd(taskDescription);
    setTaskDescription("");
    textFieldRef?.current?.focus();
  }

  function shouldBreakKeyDownMethod(event: React.KeyboardEvent): boolean {
    return event.key !== "Enter" || taskDescription === "";
  }

  function handleKeyDown(event: React.KeyboardEvent): void {
    if (shouldBreakKeyDownMethod(event)) {
      return;
    }

    handleTaskAdd();
    event.preventDefault();
  }

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
      <Button onClick={handleTaskAdd} disabled={taskDescription === ""}>
        Add
      </Button>
    </div>
  );
}

export default TaskInput;
