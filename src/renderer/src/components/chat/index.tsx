import { useState } from "react";
import styles from "./styles.module.css";
import TxtField from "../TextField";
import Btn from "../Btn";
 
export default function Chat() {
 
  const [texto, setTexto] = useState("");
 
  function enviar(){
    window.api.sendMessage(texto);
    setTexto("");
  }
 
  return (
    <div className={styles.chatContainer}>
     
      <div className={styles.messagesArea}>
        <div className={styles.message}>Boa tarde, Murilo, posso te ajudar em algo ?</div>
 
      </div>
 
      <div className={styles.area}>
        <TxtField type="text" value={texto} onChange={setTexto} />
        <Btn onClick={enviar} />
      </div>
 
    </div>
  );
}