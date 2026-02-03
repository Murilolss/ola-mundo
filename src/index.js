import { app, BrowserWindow } from 'electron';
function createWindow() {
    const win = new BrowserWindow({
        // fullscreen: true
        width: 800,
        height: 600,
    });
    win.maximizable();
    win.loadFile('./src/index.html');
}
app.whenReady().then(createWindow);