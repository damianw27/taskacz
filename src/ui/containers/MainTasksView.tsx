import AppActions from '../../types/AppActions';
import Task from '../../types/Task';
import { ipcRenderer } from 'electron';
import React, { ReactElement, useEffect, useState } from 'react';
import TaskList from '../components/TaskList';
import TaskInput from '../components/TaskInput';
import css from '../styles/TaskModule.css';

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

  function onTaskDoneChange(taskId: number, isDone: boolean): void {
    const tmpTasks = [...tasks].map((currentTask: Task) => ({
      ...currentTask,
      isDone: currentTask.id === taskId ? isDone : currentTask.isDone,
    }));

    setTasks(tmpTasks);
  }

  function onTaskDelete(taskId: number) {
    const tmpTasks = [...tasks]
      .filter((task) => task.id !== taskId)
      .map((currentTask: Task, index: number) => ({ ...currentTask, id: index }));

    setTasks(tmpTasks);
  }

  return (
    <div className={css.mainTaskView}>
      <TaskInput onTaskAdd={onTaskAdd} />
      <TaskList
        tasks={tasks || []}
        onTaskDoneChange={onTaskDoneChange}
        onTaskDelete={onTaskDelete}
      />
    </div>
  );
}

export default MainTaskView;
