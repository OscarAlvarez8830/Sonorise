export default (state = {}, action) => {
  switch (action.type) {
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
