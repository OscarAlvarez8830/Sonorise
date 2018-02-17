import React from 'react';
import { connect } from 'react-redux';
import PlaylistIndex from './playlist_index';
import { getCurrentUser } from 'reducers';
import { getUserById } from 'reducers';
import {
  getPlaylistsByIdArray
} from 'reducers/entities/playlists_reducer';
import CreateButton from './create_button';

const mapStateToProps = state => {
  const user = getUserById(state, getCurrentUser(state));
  let playlists;
  if (user) playlists = getPlaylistsByIdArray(state, user.playlistIds);
  return {
    playlists,
    header: <CreateButton />,
  };
};


export default connect(mapStateToProps)(PlaylistIndex);
