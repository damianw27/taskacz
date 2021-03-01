import React, { ReactElement } from "react";
import Task from "../../types/task"
import taskStyles from '../styles/tasks';

interface TaskItemProps {
  task: Task;
  onTaskDone(task: Task): void;
}

function TaskItem({ task, onTaskDone }: TaskItemProps): ReactElement {
  return (
    <div style={taskStyles.taskItem}>
      <span style={taskStyles.taskItemLabel}>{task.label}</span>
      <button
        type="button"
        onClick={() => onTaskDone(task)}
        style={taskStyles.taskItemDoneButton}
      >
        Done
      </button>
    </div>
  );
}

export default TaskItem;
