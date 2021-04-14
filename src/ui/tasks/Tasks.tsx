import { ipcRenderer } from "electron";
import React, { ReactElement, useEffect, useState } from "react";
import AppActions from "../../types/AppActions";
import Task from "../../types/Task";
import TextBox from "../shared/TextBox";
import css from "./styles/Tasks.css";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { Optional } from "../../types/Optional";

export default function Tasks(): ReactElement {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchPhrase, setSearchPhrase] = useState<Optional<string>>(undefined);

  function onComponentUmount(): void {
    ipcRenderer.send(AppActions.SaveTasks, tasks);
  }

  function onComponentMount(): void {
    ipcRenderer
      .invoke(AppActions.LoadTasks)
      .then(setTasks)
      .catch(console.error);

    return onComponentUmount();
  }

  useEffect(onComponentMount, []);

  function onTasksUpdate() {
    ipcRenderer.invoke(AppActions.SaveTasks, tasks);
  }

  useEffect(onTasksUpdate, [JSON.stringify(tasks)]);

  function sortTasksByDoneFlag(first: Task, second: Task) {
    return first.isDone !== second.isDone
      ? Number(second.isDone) - Number(first.isDone)
      : 0;
  }

  function onTaskAdd(taskLabel: string): void {
    const task: Task = {
      id: tasks.length || 0,
      label: taskLabel,
      isDone: false,
    };

    const tmpTasks = [...tasks, task].sort(sortTasksByDoneFlag).reverse();

    setTasks(tmpTasks);
  }

  function isTaskDone(
    currentTask: Task,
    targetTaskId: number,
    isDone: boolean,
  ): boolean {
    return currentTask.id === targetTaskId ? isDone : currentTask.isDone;
  }

  function filterTasks(task: Task) {
    return (
      searchPhrase === undefined ||
      task.label.toLowerCase().includes(searchPhrase.toLowerCase())
    );
  }

  function onTaskDoneChange(taskId: number, isDone: boolean): void {
    const tmpTasks = [...tasks]
      .map((currentTask: Task) => ({
        ...currentTask,
        isDone: isTaskDone(currentTask, taskId, isDone),
      }))
      .sort(sortTasksByDoneFlag)
      .reverse();

    setTasks(tmpTasks);
  }

  function onTaskDelete(taskId: number) {
    const tmpTasks = [...tasks]
      .filter((task) => task.id !== taskId)
      .map((currentTask: Task, index: number) => ({
        ...currentTask,
        id: index,
      }));

    setTasks(tmpTasks);
  }

  function onSearchPhraseChange() {
    if (searchPhrase !== "") {
      return;
    }

    setSearchPhrase(undefined);
  }

  useEffect(onSearchPhraseChange, [searchPhrase]);

  return (
    <div className={css.mainTaskView}>
      <TextBox
        placeholder="Search..."
        onChange={(event) => setSearchPhrase(event.target.value)}
        value={searchPhrase}
      />
      <TaskList
        onTaskDoneChange={onTaskDoneChange}
        onTaskDelete={onTaskDelete}
        tasks={[...tasks].filter(filterTasks) || []}
      />
      <TaskInput onTaskAdd={onTaskAdd} />
    </div>
  );
}
