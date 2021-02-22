import * as React from 'react';

import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
