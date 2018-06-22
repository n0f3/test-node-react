import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <Root />,
      document.getElementById('root'),
    );
  });
}
