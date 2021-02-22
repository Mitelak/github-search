import * as React from 'react';

import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader} aria-label="Loading" />
    </div>
  );
};

export default Loader;
