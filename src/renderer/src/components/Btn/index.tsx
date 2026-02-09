import styles from "./styles.module.css"
 
type Props = {
  onClick(): void;          
 
};
 
export default function Btn(props: Props) {
 
  return (
   <button
   className={styles.sendButton}
   onClick={props.onClick}>
    Enviar
    </button>
  );
}