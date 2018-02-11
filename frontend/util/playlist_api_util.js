export const fetchPlaylists = () => {
  return $.ajax({
    url: 'api/playlists',
    method: 'get',
  });
};

export const fetchPlaylist = id => {
  return $.ajax({
    url: `api/playlists/${id}`,
    method: 'get',
  });
};

export const createPlaylist = playlist => {
  return $.ajax({
    url: 'api/playlists',
    method: 'post',
    data: { playlist },
  });
};

export const updatePlaylist = playlist => {
  return $.ajax({
    url: `api/playlists/${playlist.id}`,
    method: 'patch',
    data: { playlist },
  });
};

export const deletePlaylist = id => {
  return $.ajax({
    url: `api/playlists/${id}`,
    method: 'delete',
  });
};
