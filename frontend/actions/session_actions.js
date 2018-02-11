import * as SessionAPIUtil from '../util/session_api_util';
import { thunkAction } from './general_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT = 'LOGOUT';

export const receiveCurrentUser = ({ user, playlists }) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: user,
    playlists,
  };
};

export const clearCurrentUser = () => ({ type: LOGOUT });

export const login = thunkAction(SessionAPIUtil.login, receiveCurrentUser);

export const signup = thunkAction(SessionAPIUtil.signup, receiveCurrentUser);

export const logout = thunkAction(SessionAPIUtil.logout, clearCurrentUser);
