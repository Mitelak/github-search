import * as React from 'react';

import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Input = ({
  children,
  startIcon: StartIcon,
  className,
  ...props
}: InputProps) => {
  const wrapperClasses = [styles.inputWrapper, className].join(' ');

  return (
    <div className={wrapperClasses}>
      {StartIcon && <StartIcon className={styles.startIcon} />}
      <input {...props} className={styles.input} />
    </div>
  );
};

export default Input;
