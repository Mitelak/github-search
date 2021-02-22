import * as React from 'react';

import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={[styles.container, className].join(' ')}>{children}</div>
  );
};

export default Container;
