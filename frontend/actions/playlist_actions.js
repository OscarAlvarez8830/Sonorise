import * as PlaylistAPIUtil from '../util/playlist_api_util';
import { thunkAction } from './general_actions';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';

export const receivePlaylists = playlists => {
  return {
    type: RECEIVE_PLAYLISTS,
    playlists,
  };
};

export const receivePlaylist = playlist => {
  return {
    type: RECEIVE_PLAYLIST,
    playlist,
  };
};

export const removePlaylist = playlistId => {
  return {
    type: REMOVE_PLAYLIST,
    playlistId,
  };
};

export const fetchPlaylists = thunkAction(
  PlaylistAPIUtil.fetchPlaylists,
  receivePlaylists
);

export const fetchPlaylist = thunkAction(
  PlaylistAPIUtil.fetchPlaylist,
  receivePlaylist
);

export const createPlaylist = thunkAction(
  PlaylistAPIUtil.createPlaylist,
  receivePlaylist
);

export const updatePlaylist = thunkAction(
  PlaylistAPIUtil.updatePlaylist,
  receivePlaylist
);

export const deletePlaylist = thunkAction(
  PlaylistAPIUtil.deletePlaylist,
  receivePlaylist
);
