import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import React, {
  CSSProperties,
  FocusEvent,
  KeyboardEvent,
  ReactElement,
  useState,
} from "react";
import Task from "../../types/Task";
import Button from "../shared/Button";
import TextBox from "../shared/TextBox";
import css from "./styles/Tasks.css";

interface TaskItemProps {
  task: Task;
  onTaskDoneChange(taskId: number, isDone: boolean): void;
  onTaskDelete(taskId: number): void;
}

function TaskItem({
  task,
  onTaskDoneChange,
  onTaskDelete,
}: TaskItemProps): ReactElement {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const containerStyle: CSSProperties = {
    color: task.isDone ? "rgb(100, 100, 100)" : "rgb(50, 50, 50)",
  };

  const textStyle: CSSProperties = {
    textDecoration: task.isDone ? "line-through" : "none",
  };

  function renderCheckIndicator(): ReactElement {
    return task.isDone ? (
      <CheckCircleOutlineIcon
        onClick={() => onTaskDoneChange(task.id, false)}
      />
    ) : (
      <RadioButtonUncheckedIcon
        onClick={() => onTaskDoneChange(task.id, true)}
      />
    );
  }

  function handleTaskLabelChange(event: KeyboardEvent<HTMLInputElement>): void {
    if (event.key !== "Enter") {
      return;
    }

    task.label = event.currentTarget.value;
    setIsEditMode(false);
  }

  function handleFocus(event: FocusEvent<HTMLInputElement>): void {
    task.label = event.currentTarget.value;
    setIsEditMode(false);
  }

  function renderTaskDescriptor(): ReactElement {
    return isEditMode ? (
      <TextBox
        defaultValue={task.label}
        onKeyDown={handleTaskLabelChange}
        onBlur={handleFocus}
        autoFocus
      />
    ) : (
      <span
        className={css.taskItemLabel}
        style={textStyle}
        onDoubleClick={() => setIsEditMode(true)}
      >
        {task.label}
      </span>
    );
  }

  return (
    <li className={css.taskItem} style={containerStyle}>
      <div className={css.taskItemCheckIndicatorContainer}>
        {renderCheckIndicator()}
      </div>
      <div className={css.taskItemLabelContainer}>{renderTaskDescriptor()}</div>
      <Button onClick={() => onTaskDelete(task.id)} isDanger>
        Delete
      </Button>
    </li>
  );
}

export default TaskItem;
