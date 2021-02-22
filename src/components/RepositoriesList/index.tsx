import * as React from 'react';

import Container from 'components/Container';

import styles from './RepositoriesList.module.css';

const REPOSITORIES_MOCK = [
  {
    id: 1,
    name: 'react-query',
    html_url: 'https://github.com/tannerlinsley/react-query',
    stargazers_count: 17836,
  },
  {
    id: 2,
    name: 'react-table',
    html_url: 'https://github.com/tannerlinsley/react-table',
    stargazers_count: 13000,
  },
];

const RepositoriesList = () => {
  return (
    <Container>
      <h2 className={styles.title}>Top repositories</h2>

      <ul className={styles.list}>
        {REPOSITORIES_MOCK.map((item) => (
          <li key={item.id} className={styles.item}>
            <a href={item.html_url} className={styles.link}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default RepositoriesList;
