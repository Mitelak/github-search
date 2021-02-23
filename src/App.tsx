import * as React from 'react';

import Topbar from 'components/Topbar';
import Introduction from 'components/Introduction';
import UserDetails from 'components/UserDetails';
import Container from 'components/Container';

import styles from './App.module.css';

/*
 * In an app with better routing handling, we could use query string as the only source of truth.
 * In this case, it's only for keeping a better UX behavior.
 */
const SEARCH_QUERY_PARAM = 'search';
const getInitialSearchName = (): string =>
  new URLSearchParams(window.location.search).get(SEARCH_QUERY_PARAM) ?? '';

const App = () => {
  const [userName, setUserName] = React.useState<string>(getInitialSearchName);

  const handleSearch = (name: string) => {
    setUserName(name);
    const query = new URLSearchParams({ [SEARCH_QUERY_PARAM]: name });
    window.history.pushState({}, '', '?' + query.toString());
  };

  return (
    <>
      <Topbar onSearch={handleSearch} />
      <Container className={styles.content}>
        {userName ? <UserDetails name={userName} /> : <Introduction />}
      </Container>
    </>
  );
};

export default App;
