import { combineReducers } from 'redux';
import users from './users_reducer';
import playlists from './playlists_reducer';

export default combineReducers({
  users,
  playlists,
});
