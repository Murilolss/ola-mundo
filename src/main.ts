import { app, BrowserWindow } from 'electron';
const { ipcMain } = require('electron');


function createWindow() {
 const win = new BrowserWindow({
 width: 800,
 height: 600,
 webPreferences:{
    preload: './dist/preload.js'
 }
 });
 win.loadFile('./src/index.html');
}
app.whenReady().then(createWindow);
