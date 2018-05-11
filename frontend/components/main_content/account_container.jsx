import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from 'reducers';
import { getUserById } from 'reducers';
import { logout } from 'actions/session_actions';

const Account = ({ currentUser, logout }) => {
  return (
    <section className="Account">
      <img
        src={currentUser.avatarMedium}
        alt="user-photo"
        className="Account__img" />
      <h3 className="Account__h3">{currentUser.username}</h3>
      <button className="Account__btn" onClick={logout}>Log Out</button>
    </section>
  );
};

const mapStateToProps = state => {
  const id = getCurrentUser(state);
  const currentUser = getUserById(state, id);
  return { currentUser };
};

export default connect(mapStateToProps, { logout })(Account);
