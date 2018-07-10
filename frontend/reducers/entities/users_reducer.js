import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from 'actions/session_actions';
import { RECEIVE_PLAYLIST } from 'actions/playlist_actions';

export default (state = {}, action) => {
  let newState;
  switch (action.type) {
  case RECEIVE_CURRENT_USER:
    return Object.assign(
      {},
      state,
      { [action.currentUser.id]: action.currentUser }
    );
  case RECEIVE_PLAYLIST:
    if (action.playlist.userId) {
      newState = merge({}, state);
      newState[action.playlist.userId].playlistIds = action.playlistIds;
      return newState;
    }
  default:
    return state;
  }
};

export const getUserById = (state, id) => state.entities.users[id];
