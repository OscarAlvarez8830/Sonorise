import React from 'react';
import { connect } from 'react-redux';
import PlaylistIndex from './playlists/playlist_index';

const mapStateToProps = state => {
  return {
    playlists: [],
    header: <h1 className="PlaylistIndex__h1">Take it easy</h1>,
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);
