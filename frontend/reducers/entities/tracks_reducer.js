import { RECEIVE_PLAYLIST } from 'actions/playlist_actions';

export default (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_PLAYLIST:
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
