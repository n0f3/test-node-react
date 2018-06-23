import React from 'react';
import FindTagContainer from '../containers/FindTagContainer';
import TagResultContainer from '../containers/TagResultContainer';

const App = () => (
  <div
    style={{
      width: '80%',
    }}
  >
    <FindTagContainer />
    <TagResultContainer />
  </div>
);

export default App;
