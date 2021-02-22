import * as React from 'react';

import Topbar from 'components/Topbar';
import Introduction from 'components/Introduction';
import UserDetails from 'components/UserDetails';
import RepositoriesList from 'components/RepositoriesList';

const App = () => {
  const [userName, setUserName] = React.useState<string>('');

  return (
    <div>
      <Topbar onSearch={setUserName} />

      {!userName && <Introduction />}

      <UserDetails />
      <RepositoriesList />
    </div>
  );
};

export default App;
