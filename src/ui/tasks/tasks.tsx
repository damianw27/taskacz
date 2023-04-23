import { ipcRenderer } from 'electron';
import React, { ReactElement, useEffect, useState } from 'react';
import css from '@ui/tasks/styles/tasks.css';
import { Optional } from '@type/optional';
import { Task } from '@type/task';
import { AppActions } from '@type/app-actions';
import { TextBox } from '@ui/shared/text-box';
import { TaskList } from '@ui/tasks/task-list';
import { TaskInput } from '@ui/tasks/task-input';

export const Tasks = (): ReactElement => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchPhrase, setSearchPhrase] = useState<Optional<string>>(undefined);

  const sortTasksByDoneFlag = (first: Task, second: Task) =>
    first.isDone !== second.isDone ? Number(second.isDone) - Number(first.isDone) : 0;

  const onTaskAdd = (taskLabel: string): void => {
    const task: Task = {
      id: tasks.length || 0,
      label: taskLabel,
      isDone: false,
    };

    const tmpTasks = [...tasks, task].sort(sortTasksByDoneFlag).reverse();

    setTasks(tmpTasks);
  };

  const isTaskDone = (currentTask: Task, targetTaskId: number, isDone: boolean): boolean =>
    currentTask.id === targetTaskId ? isDone : currentTask.isDone;

  const filterTasks = (task: Task) =>
    searchPhrase === undefined || task.label.toLowerCase().includes(searchPhrase.toLowerCase());

  const onTaskDoneChange = (taskId: number, isDone: boolean): void => {
    const tmpTasks = [...tasks]
      .map((currentTask: Task) => ({
        ...currentTask,
        isDone: isTaskDone(currentTask, taskId, isDone),
      }))
      .sort(sortTasksByDoneFlag)
      .reverse();

    setTasks(tmpTasks);
  };

  const onTaskDelete = (taskId: number) => {
    const tmpTasks = [...tasks]
      .filter((task) => task.id !== taskId)
      .map((currentTask: Task, index: number) => ({
        ...currentTask,
        id: index,
      }));

    setTasks(tmpTasks);
  };

  useEffect(() => {
    ipcRenderer.invoke(AppActions.LoadTasks).then(setTasks).catch(console.error);

    return () => ipcRenderer.send(AppActions.SaveTasks, tasks);
  }, []);

  useEffect(() => {
    ipcRenderer.invoke(AppActions.SaveTasks, tasks);
  }, [JSON.stringify(tasks)]);

  useEffect(() => {
    if (searchPhrase !== '') {
      return;
    }

    setSearchPhrase(undefined);
  }, [searchPhrase]);

  return (
    <div className={css.mainTaskView}>
      <TextBox placeholder="Search..." onChange={(event) => setSearchPhrase(event.target.value)} value={searchPhrase} />
      <TaskList
        onTaskDoneChange={onTaskDoneChange}
        onTaskDelete={onTaskDelete}
        tasks={[...tasks].filter(filterTasks) || []}
      />
      <TaskInput onTaskAdd={onTaskAdd} />
    </div>
  );
};
