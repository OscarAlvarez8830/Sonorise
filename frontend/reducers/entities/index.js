import { combineReducers } from 'redux';
import users, * as UserSelectors from './users_reducer';
import playlists, * as PlaylistSelectors from './playlists_reducer';
import tracks, * as TrackSelectors from './tracks_reducer';
import artists, * as ArtistSelectors from './artists_reducer';

export default combineReducers({
  users,
  playlists,
  tracks,
  artists,
});

export const { getUserById } = UserSelectors;

export const { getPlaylistById, getPlaylistsByIdArray } = PlaylistSelectors;

export const { getTracksByIdArray, getTrackById } = TrackSelectors;

export const { getArtistById, getArtistsByIdArray } = ArtistSelectors;
