import Task from "./types/Task";
import fs from "fs";
import PublicService from "./PublicService";
import AppActions from "./types/AppActions";

const TasksFilePath = "./data/tasks.json";
const DataFolder = "./data";

export default class TaskManager implements PublicService {
  loadTasksItems(): Task[] {
    try {
      return this.readTasksDataFromFile();
    } catch (fileSystemError) {
      console.error(fileSystemError);
    }

    return [];
  }

  private readTasksDataFromFile(): Task[] {
    if (!fs.existsSync(DataFolder)) {
      fs.mkdirSync(DataFolder, { recursive: true });
    }

    const readFlag = fs.existsSync(TasksFilePath) ? "r" : "wx";
    const dataFromFile = fs.readFileSync(TasksFilePath, {
      encoding: "utf-8",
      flag: readFlag,
    });
    return JSON.parse(dataFromFile) || [];
  }

  saveTasksItems(tasks: Task[]): void {
    try {
      fs.writeFileSync(TasksFilePath, JSON.stringify(tasks));
    } catch (fileSystemError) {
      console.log(fileSystemError);
    }
  }

  register(ipcMain: Electron.IpcMain): void {
    ipcMain.handle(AppActions.LoadTasks, () => this.loadTasksItems());

    ipcMain.handle(AppActions.SaveTasks, (_, args: Task[]) =>
      this.saveTasksItems(args),
    );
  }
}
