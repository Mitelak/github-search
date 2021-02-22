import * as React from 'react';

import github, { RepositoryShape } from 'api/github';
import List from 'components/List';
import Loader from 'components/Loader';

import styles from './UserDetails.module.css';

const RepositoryItem = ({ html_url, name }: RepositoryShape) => (
  <a href={html_url} className={styles.repoLink}>
    {name}
  </a>
);

interface UserDetailsProps {
  name: string;
}

const UserDetails = ({ name }: UserDetailsProps) => {
  const user = github.useUser(name);
  const repos = github.useRepositories(name);

  if (user.error) {
    return <p className={styles.error}>{user.error}</p>;
  }

  if (!user.data || user.isLoading) {
    return <Loader />;
  }

  return (
    <>
      <section className={styles.user}>
        <img className={styles.avatar} src={user.data.avatar_url} alt="" />
        <h1 className={styles.name}>{user.data.name ?? user.data.login}</h1>
        {user.data.bio && <p className={styles.bio}>{user.data.bio}</p>}
      </section>

      <section>
        <h2 className={styles.reposTitle}>Top repositories</h2>
        <List
          items={repos.data?.items}
          renderItem={RepositoryItem}
          isLoading={repos.isLoading}
          error={repos.error && 'Repositories not available'}
        />
      </section>
    </>
  );
};

export default UserDetails;
