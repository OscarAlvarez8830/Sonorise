import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from 'util/route_util';
import LandingPage from 'components/landing/landing_page';
import LoginForm from 'components/session_forms/login_form_container';
import SignupForm from 'components/session_forms/signup_form_container';
import Main from 'components/main_content/main';

import configureStore from './store/store';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          <Switch>
            <AuthRoute path="/login" component={LoginForm} />
            <AuthRoute path="/sign-up" component={SignupForm} />
            <AuthRoute path="/" exact={true} component={LandingPage} />
            <ProtectedRoute path="/" component={Main} />
          </Switch>
        </div>
      </HashRouter>
    </Provider>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const { user, playlists } = window.currentUser;
    store = configureStore({
      session: { currentUser: user.id },
      entities: { users: { [user.id]: user }, playlists },
    });
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store} />, root);
})
