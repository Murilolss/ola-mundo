import { useState } from 'react';
import styles from './styles.module.css';
import TxtField from '../TextField';
import Btn from '../Btn';
import type { Message } from '../../../shared/models/Message.js';

export default function Chat() {
 const [texto, setTexto] = useState('');
 const [messages, setMessages] = useState([] as Message[]);

 async function handleSend() {
  const newMessages = await window.api.postMessage(texto);
  setMessages((prev) => prev.concat(newMessages));
  setTexto("");
 }


 //   function enviar(){
 //     window.api.sendMessage(texto);
 //   }

 return (
  <div className={styles.chatContainer}>
   <div className={styles.messagesArea}>
    {messages.map((message) => (
     <div key={message.createdAt} className={styles.message}>
      {new Date(message.createdAt).toDateString()}: {message.text}
     </div>
    ))}
   </div>

   <div className={styles.area}>
    <TxtField type="text" value={texto} onChange={setTexto} />
    <Btn onClick={handleSend} />
   </div>
  </div>
 );
}
