import { RECEIVE_PLAYLIST } from 'actions/playlist_actions';
import { RECEIVE_SEARCH_RESULTS } from 'actions/track_actions';

export default (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_PLAYLIST:
  case RECEIVE_SEARCH_RESULTS:
    return Object.assign({}, state, action.artists);
  default:
    return state;
  }
}

export const getArtistById = (state, id) => {
  return state.entities.artists[id];
}
