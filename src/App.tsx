import * as React from 'react';

import Topbar from 'components/Topbar';

const App = () => {
  return (
    <div>
      <Topbar
        onSearch={(searchValue) => {
          console.log(searchValue);
        }}
      />
    </div>
  );
};

export default App;
