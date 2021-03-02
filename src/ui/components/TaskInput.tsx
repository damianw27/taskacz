import { createStyles, IconButton, InputBase, makeStyles, Paper, Theme } from '@material-ui/core';
import React, { ReactElement, useRef, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';

interface TaskInputProps {
  onTaskAdd(taskLabel: string): void,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: "99%",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: "5px",
    },
  }),
);

function TaskInput({ onTaskAdd }: TaskInputProps): ReactElement {
  const [taskLabel, setTaskLabel] = useState<string>("");
  const textFieldRef = useRef<HTMLInputElement>();
  const classes = useStyles();

  function handleTaskAdd() {
    onTaskAdd(taskLabel);
    setTaskLabel("");
    textFieldRef?.current?.focus();
  }

  function shouldBreakKeyDownMethod(event: React.KeyboardEvent): boolean {
    return event.key !== "Enter"
      || taskLabel === "";
  }

  function handleKeyDown(event: React.KeyboardEvent): void {
    if (shouldBreakKeyDownMethod(event)) {
      return;
    }

    handleTaskAdd();
    event.preventDefault();
  }

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Add new task"
        onChange={(event) => setTaskLabel(event.target.value)}
        onKeyDown={handleKeyDown}
        value={taskLabel}
        inputRef={textFieldRef}
        autoFocus
      />
      <IconButton
        type="button"
        onClick={handleTaskAdd}
        className={classes.iconButton}
        disabled={taskLabel === ""}
      >
        <AddIcon />
      </IconButton>
    </Paper>
  );
}

export default TaskInput;

