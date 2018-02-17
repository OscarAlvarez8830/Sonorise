import { RECEIVE_PLAYLIST } from 'actions/playlist_actions';

export default (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_PLAYLIST:
    return Object.assign({}, state, action.artists);
  default:
    return state;
  }
}

export const getArtistById = (state, id) => {
  return state.entities.artists[id];
}
