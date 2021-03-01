import AppActions from '../../types/appActions';
import Task from '../../types/task';
import { ipcRenderer } from 'electron';
import React, { ReactElement, useEffect, useState } from 'react';
import TaskList from '../components/taskList';
import TaskInput from '../components/taskInput';

function MainTaskView(): ReactElement {
  const [tasks, setTasks] = useState<Task[]>([]);

  function onComponentMount() {
    ipcRenderer
      .invoke(AppActions.LoadTasks)
      .then(setTasks)
      .catch(console.error);
  }

  function onComponentUmount() {
    ipcRenderer
      .send(AppActions.SaveTasks, tasks);
  }

  useEffect(() => {
    onComponentMount();
    return onComponentUmount();
  }, []);

  useEffect(() => {
    ipcRenderer
      .invoke(AppActions.SaveTasks, tasks);
  }, [JSON.stringify(tasks)])

  function onTaskAdd(taskLabel: string): void {
    const tmpTasks = [...tasks];

    const task: Task = {
      id: tmpTasks.length || 0,
      label: taskLabel,
      isDone: false,
    }

    tmpTasks.push(task);

    setTasks(tmpTasks);
  }

  function onTaskDone(task: Task): void {
    const tmpTasks = [...tasks]
      .filter((currentTask: Task) => currentTask.id !== task.id)
      .map((currentTask: Task, index: number) => ({ ...currentTask, id: index } as Task));

    setTasks(tmpTasks);
  }

  return (
    <>
      <TaskList tasks={tasks || []} onTaskDone={onTaskDone} />
      <TaskInput onTaskAdd={onTaskAdd} />
    </>
  );
}

export default MainTaskView;
