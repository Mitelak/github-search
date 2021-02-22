import * as React from 'react';

import Button from 'components/Button';
import Input from 'components/Input';
import Container from 'components/Container';
import { ReactComponent as SearchIcon } from 'assets/search.svg';

import styles from './Topbar.module.css';

interface TopbarProps {
  onSearch: (value: string) => void;
}

const Topbar = ({ onSearch }: TopbarProps) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    /*
     * Not the prettiest solution but thanks to that we don't use
     * anything else than native submit event
     */
    const target = event.target as typeof event.target & {
      search: { value: string };
    };
    onSearch(target.search.value);
  };

  return (
    <header className={styles.topbar}>
      <Container>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            className={styles.input}
            placeholder="Search for users"
            aria-label="Github user name"
            startIcon={SearchIcon}
            name="search"
            type="search"
          />
          <Button type="submit">Search</Button>
        </form>
      </Container>
    </header>
  );
};

export default Topbar;
