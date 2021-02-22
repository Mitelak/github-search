import * as React from 'react';

import Topbar from 'components/Topbar';
import Introduction from 'components/Introduction';
import UserDetails from 'components/UserDetails';
import Container from 'components/Container';

import styles from './App.module.css';

const App = () => {
  const [userName, setUserName] = React.useState<string>('');

  return (
    <>
      <Topbar onSearch={setUserName} />
      <Container className={styles.content}>
        {userName ? <UserDetails name={userName} /> : <Introduction />}
      </Container>
    </>
  );
};

export default App;
