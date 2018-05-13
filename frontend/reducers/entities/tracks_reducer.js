import { RECEIVE_PLAYLIST } from 'actions/playlist_actions';
import { RECEIVE_SEARCH_RESULTS } from 'actions/track_actions';

export default (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_PLAYLIST:
  case RECEIVE_SEARCH_RESULTS:
    return Object.assign({}, state, action.tracks);
  default:
    return state;
  }
};

export const getTracksByIdArray = (state, ids) => {
  return ids.map(id => state.entities.tracks[id]);
};

export const getTrackById = (state, id) => {
  return state.entities.tracks[id];
};
