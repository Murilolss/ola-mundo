import { contextBridge, ipcRenderer } from 'electron';
import { Message } from './shared/models/Message';

contextBridge.exposeInMainWorld('api', {
 sendMessage: function (message: string) {
  ipcRenderer.send('message', message);
 },

 postMessage: function (text: string): Promise<Message[]> {
  return ipcRenderer.invoke('chat:postMessage', { text: text });
 },
});
