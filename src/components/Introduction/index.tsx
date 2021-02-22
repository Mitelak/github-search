import * as React from 'react';

import Container from 'components/Container';

import styles from './Introduction.module.css';

const Introduction = () => {
  return (
    <Container>
      <h1 className={styles.title}>Github Search</h1>
      <p className={styles.subtitle}>
        Write Github user nick to see their repo stats!
      </p>
    </Container>
  );
};

export default Introduction;
