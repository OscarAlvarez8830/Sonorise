import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentUser } from '../reducers/session_reducer';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={props => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/browse" />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={props => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const mapStateToProps = state => ({ loggedIn: Boolean(getCurrentUser(state)) });

export const AuthRoute = connect(mapStateToProps)(Auth);
export const ProtectedRoute = connect(mapStateToProps)(Protected);
