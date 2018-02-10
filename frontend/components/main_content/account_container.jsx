import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../../reducers/session_reducer';
import { getUserById } from '../../reducers/entities/users_reducer';
import { logout } from '../../actions/session_actions';

const Account = ({ currentUser, logout }) => {
  return (
    <section className="Account">
      <img src="" alt="user-photo" className="Account__img" />
      <h3 className="Account__h3">{ currentUser.username }</h3>
      <button className="Account__btn" onClick={ logout }>Log Out</button>
    </section>
  );
};

const mapStateToProps = state => {
  const id = getCurrentUser(state);
  const currentUser = getUserById(state, id);
  return { currentUser };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
