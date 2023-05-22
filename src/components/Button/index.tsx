import { ButtonHTMLAttributes } from 'react';
import styles from './index.module.css';

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props}className={styles.button}></button>;
};

export default Button;
