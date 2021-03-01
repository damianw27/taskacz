import Task from "./types/task";
import fs from "fs";
import PublicService from "./publicService";
import AppActions from "./types/appActions";

const TasksFilePath = "./data/tasks.txt";
const TaskArgsSeparator = "|";
const RequiredCountOfTaskArgs = 3;
const NEW_LINE_SEPARATOR = "\r\n";

export default class TodoManager implements PublicService {
  loadTasksItems(): Task[] {
    const tasks: Task[] = [];

    try {
      this.readTasksDataFromFile()
        .map(this.getTaskFromString)
        .filter((todo) => todo !== undefined)
        .forEach((todo: Optional<Task>) => tasks.push(todo as Task));
    } catch (fileSystemError) {
      console.error(fileSystemError);
    }

    return tasks;
  }

  private readTasksDataFromFile(): string[] {
    return fs.readFileSync(TasksFilePath, "utf-8").split(NEW_LINE_SEPARATOR);
  }

  saveTasksItems(todoItems: Task[]): void {
    if (!todoItems) {
      return;
    }

    const data = todoItems.map(this.getStringFromTask).join(NEW_LINE_SEPARATOR);

    try {
      fs.writeFileSync(TasksFilePath, data);
    } catch (fileSystemError) {
      console.log(fileSystemError);
    }
  }

  register(ipcMain: Electron.IpcMain): void {
    ipcMain.handle(AppActions.LoadTasks, () => this.loadTasksItems());

    ipcMain.handle(AppActions.SaveTasks, (_, args: Task[]) =>
      this.saveTasksItems(args)
    );
  }

  private getTaskFromString(data: string): Optional<Task> {
    const taskArgs = data.split(TaskArgsSeparator);

    if (taskArgs.length !== RequiredCountOfTaskArgs) {
      return undefined;
    }

    return {
      id: Number.parseInt(taskArgs[0]),
      label: taskArgs[1],
      isDone: taskArgs[2] === "true",
    };
  }

  private getStringFromTask(task: Task) {
    const data = [
      task.id,
      TaskArgsSeparator,
      task.label,
      TaskArgsSeparator,
      task.isDone ? "true" : false,
    ];

    return data.join("");
  }
}
