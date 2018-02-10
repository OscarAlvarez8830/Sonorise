import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentUser } from '../../reducers/session_reducer';
import { getUserById } from '../../reducers/entities/users_reducer';
import { logout } from '../../actions/session_actions';

const Sidebar = ({ currentUser, logout }) => {
  return (
    <nav className="Sidebar">
      <ul className="Sidebar__ul">
        <li className="Sidebar__li">
          <Link to="/browse" className="Sidebar__link">Home</Link>
        </li>
        <li className="Sidebar__li">
          <Link to="/collection" className="Sidebar__link">Your Music</Link>
        </li>
      </ul>

      <Link to="/account">{ currentUser.username }</Link>
    </nav>
  );
};

const mapStateToProps = state => {
  const id = getCurrentUser(state);
  const currentUser = getUserById(state, id);
  return { currentUser };
};

export default connect(mapStateToProps)(Sidebar);
