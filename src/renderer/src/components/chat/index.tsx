import styles from "./styles.module.css";
 
export default function Chat() {
  return (
    <div className={styles.chatContainer}>
     
      <div className={styles.messagesArea}>
        <div className={styles.message}>Boa tarde, Murilo, posso te ajudar em algo ?</div>
 
      </div>
 
      <div className={styles.inputArea}>
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          className={styles.input}
        />
        <button className={styles.sendButton}>Enviar</button>
      </div>
 
    </div>
  );
}
 
 