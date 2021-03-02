import TaskManager from "./TaskManager";
import PublicService from "./PublicService";
import { ipcMain, app, BrowserWindow } from "electron";

function registerServices() {
  const services: PublicService[] = [new TaskManager()];

  return services.forEach((service: PublicService) =>
    service.register(ipcMain)
  );
}

function createWindow() {
  registerServices();

  const win = new BrowserWindow({
    width: 500,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.setResizable(false);
  win.removeMenu();

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
