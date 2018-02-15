import { combineReducers } from 'redux';
import users from './users_reducer';
import playlists from './playlists_reducer';
import tracks from './tracks_reducer';
import artists from './artists_reducer';

export default combineReducers({
  users,
  playlists,
  tracks,
  artists,
});
