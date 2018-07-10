import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomePlaylists } from 'reducers';
import { fetchPlaylists } from 'actions/playlist_actions';
import PlaylistIndex from './playlists/playlist_index';

const mapStateToProps = state => {
  return {
    playlists: getHomePlaylists(state),
    header: <h1 className="PlaylistIndex__h1">Take it easy</h1>,
  };
};

class HomePlaylistIndex extends Component {
  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    const { header, playlists } = this.props;
    return (
      <PlaylistIndex header={header} playlists={playlists} />
    );
  }
}

export default connect(mapStateToProps, { fetchPlaylists })(HomePlaylistIndex);
