import { IpcMain } from 'electron';

export default interface PublicService {
  register: (ipcMain: IpcMain) => void;
}
