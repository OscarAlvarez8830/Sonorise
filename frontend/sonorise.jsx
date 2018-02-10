import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import configureStore from './store/store';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          Hello!
        </div>
      </HashRouter>
    </Provider>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    store = configureStore({
      session: { currentUser: window.currentUser.id },
      users: { [window.currentUser.id]: window.currentUser },
    });
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store} />, root);
})
