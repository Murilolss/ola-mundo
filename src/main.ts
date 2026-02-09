import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '/preload.js'),
    },
  });
//   win.loadFile('./src/index.html');
  win.webContents.openDevTools();
win.loadURL('http://localhost:5173');
}

ipcMain.on('message', function (event, data) {
  console.log('Mensagem recebida:', data);
});

app.whenReady().then(createWindow);
