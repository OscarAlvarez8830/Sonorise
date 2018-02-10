import { RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions';

const defaultState = {
  currentUser: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
  case RECEIVE_CURRENT_USER:
    return Object.assign({}, state, action.currentUser);
  case LOGOUT:
    return defaultState;
  default:
    return state;
  }
};

export const getCurrentUser = state => state.session.currentUser;
