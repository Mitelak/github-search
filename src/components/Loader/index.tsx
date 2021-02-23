import * as React from 'react';

import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.wrapper} data-testid="loader">
      <div className={styles.loader} aria-label="Loading" />
    </div>
  );
};

export default Loader;
