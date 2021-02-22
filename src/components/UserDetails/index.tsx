import * as React from 'react';

import Container from 'components/Container';

import styles from './UserDetails.module.css';

const UserDetails = () => {
  return (
    <Container className={styles.wrapper}>
      <img
        className={styles.avatar}
        src="https://source.unsplash.com/200x300/?portrait"
        alt=""
      />
      <h1 className={styles.name}>Mateusz Mitelski</h1>
      <p className={styles.bio}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </Container>
  );
};

export default UserDetails;
