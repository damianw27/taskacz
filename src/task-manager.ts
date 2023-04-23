import { Task } from '@type/task';
import fs from 'fs';
import PublicService from './public-service';
import { AppActions } from '@type/app-actions';

const TasksFilePath = './data/tasks.json';
const DataFolder = './data';

export default class TaskManager implements PublicService {
  public loadTasksItems(): Task[] {
    try {
      return this.readTasksDataFromFile();
    } catch (fileSystemError) {
      console.error(fileSystemError);
    }

    return [];
  }

  public saveTasksItems(tasks: Task[]): void {
    try {
      fs.writeFileSync(TasksFilePath, JSON.stringify(tasks));
    } catch (fileSystemError) {
      console.log(fileSystemError);
    }
  }

  public register(ipcMain: Electron.IpcMain): void {
    ipcMain.handle(AppActions.LoadTasks, () => this.loadTasksItems());

    ipcMain.handle(AppActions.SaveTasks, (_, args: Task[]) => this.saveTasksItems(args));
  }

  private readTasksDataFromFile(): Task[] {
    if (!fs.existsSync(DataFolder)) {
      fs.mkdirSync(DataFolder, { recursive: true });
    }

    const readFlag = fs.existsSync(TasksFilePath) ? 'r' : 'wx';
    const dataFromFile = fs.readFileSync(TasksFilePath, {
      encoding: 'utf-8',
      flag: readFlag,
    });
    return JSON.parse(dataFromFile) || [];
  }
}
