import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import LandingPage from './components/landing/landing_page';
import LoginForm from './components/session_forms/login_form_container';
import SignupForm from './components/session_forms/signup_form_container';

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
    store = configureStore({
      session: { currentUser: window.currentUser.id },
      entities: { users: { [window.currentUser.id]: window.currentUser } },
    });
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store} />, root);
})
