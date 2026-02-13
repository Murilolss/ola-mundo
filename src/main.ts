import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { Message } from './shared/models/Message';

function createWindow() {
 const win = new BrowserWindow({
  width: 800,
  height: 600,
  webPreferences: {
   preload: path.join(__dirname, '/preload.js'),
  },
 });
 //   win.loadFile('./src/index.html');
 // win.webContents.openDevTools();
 win.loadURL('http://localhost:5173');
}

ipcMain.on('message', function (_event, data) {
 console.log('Mensagem recebida:', data);
});

ipcMain.handle('chat:postMessage', function (_event, payload) {
 const message: Message = {
  text: payload.text,
  createdAt: new Date().toISOString(),
 };

 // por enquanto: devolve só a mensagem enviada
 return [message];
});

app.whenReady().then(createWindow);
