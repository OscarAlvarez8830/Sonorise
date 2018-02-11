import { RECEIVE_CURRENT_USER } from 'actions/session_actions';
import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST,
} from '../../actions/playlist_actions';

export default (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_CURRENT_USER:
  case RECEIVE_PLAYLISTS:
    return Object.assign({}, state, action.playlists);
  case RECEIVE_PLAYLIST:
    return Object.assign({}, state, { [action.playlist.id]: action.playlist });
  case REMOVE_PLAYLIST:
    const newState = Object.assign({}, state);
    delete newState[action.playlistId];
    return newState;
  default:
    return state;
  }
};

export const getPlaylistsByIdArray = (state, ids) => {
  return ids.map(id => state.entities.playlists[id]);
};

export const getPlaylistById = (state, id) => {
  return state.entities.playlists[id];
};
