import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { getCurrentUser } from '../../reducers/session_reducer';
import { getUserById } from '../../reducers/entities/users_reducer';
import { logout } from '../../actions/session_actions';

const Sidebar = ({ currentUser, logout }) => {
  return (
    <nav className="Sidebar">
      <ul className="Sidebar__ul">
        <li className="Sidebar__li">
          <NavLink
            to="/browse"
            className="Sidebar__link--nav"
            activeClassName="Sidebar__link--nav--active">
            Home
          </NavLink>
        </li>
        <li className="Sidebar__li">
          <NavLink
            to="/collection"
            className="Sidebar__link--nav"
            activeClassName="Sidebar__link--nav--active">
            Your Music
          </NavLink>
        </li>
      </ul>
      <section className="Sidebar__section">
        <img src="" alt="user-photo" className="Sidebar__img" />
        <Link to="/account">{ currentUser.username }</Link>
      </section>
    </nav>
  );
};

const mapStateToProps = state => {
  const id = getCurrentUser(state);
  const currentUser = getUserById(state, id);
  return { currentUser };
};

export default withRouter(connect(mapStateToProps)(Sidebar));
