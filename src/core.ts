import TodoManager from "./taskManager";
import PublicService from "./publicService";
import { ipcMain, app, BrowserWindow } from "electron";

function registerServices() {
  const services: PublicService[] = [new TodoManager()];

  return services.forEach((service: PublicService) =>
    service.register(ipcMain)
  );
}

function createWindow() {
  registerServices();

  const win = new BrowserWindow({
    width: 400,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.setResizable(false);

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
