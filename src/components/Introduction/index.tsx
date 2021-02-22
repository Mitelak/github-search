import * as React from 'react';

import styles from './Introduction.module.css';

const Introduction = () => {
  return (
    <>
      <h1 className={styles.title}>Github Search</h1>
      <p className={styles.subtitle}>
        Use the search above to find user stats by their Github nick.
      </p>
    </>
  );
};

export default Introduction;
