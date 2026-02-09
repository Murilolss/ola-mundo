import styles from './styles.module.css';
import { type ChangeEvent } from 'react';
 
type Props = {
  type: 'text' | 'email' | 'password' | 'number';
  onChange(texto: string): void;
  value: string | number;
};
 
export default function TxtField(props: Props) {
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    props.onChange?.(e.target.value);
  }
 
  return (
    <div className={styles.containerp}>
      <input
        type={props.type}
        placeholder="Digite sua mensagem..."
        className={styles.input}
        value={props.value}
        onChange={handleInputChange}
      />
    </div>
  );
}