import AppActions from '../../types/AppActions';
import Task from '../../types/Task';
import { ipcRenderer } from 'electron';
import React, { ReactElement, useEffect, useState } from 'react';
import TaskList from '../components/TaskList';
import TaskInput from '../components/TaskInput';
import css from '../styles/TaskModule.css';
import useDebouncedEffect from '../hooks/DebouncedEffect';

function Tasks(): ReactElement {
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

  function onDebouncedTasksUpdate() {
    ipcRenderer
      .invoke(AppActions.SaveTasks, tasks);
  }

  useDebouncedEffect(onDebouncedTasksUpdate, [JSON.stringify(tasks)], 200);

  function sortTasksByDoneFlag(first: Task, second: Task) {
    return  first.isDone !== second.isDone
      ? Number(second.isDone) - Number(first.isDone)
      : 0;
  }

  function onTaskAdd(taskLabel: string): void {
    const task: Task = {
      id: tasks.length || 0,
      label: taskLabel,
      isDone: false,
    }

    const tmpTasks = [...tasks, task]
      .sort(sortTasksByDoneFlag)
      .reverse();

    setTasks(tmpTasks);
  }

  function onTaskDoneChange(taskId: number, isDone: boolean): void {
    const tmpTasks = [...tasks]
      .map((currentTask: Task) => ({
        ...currentTask,
        isDone: currentTask.id === taskId ? isDone : currentTask.isDone,
      }))
      .sort(sortTasksByDoneFlag)
      .reverse();

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

export default Tasks;
