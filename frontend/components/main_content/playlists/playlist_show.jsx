import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlaylistById } from 'reducers/entities/playlists_reducer';
import { getUserById } from 'reducers/entities/users_reducer';
import { getTracksByIdArray } from 'reducers/entities/tracks_reducer';
import { fetchPlaylist } from 'actions/playlist_actions';
import TrackIndex from '../tracks/track_index';

class PlaylistShow extends Component {
  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.id);
  }

  render() {
    const { playlist, user, tracks } = this.props;
    return (
      <main className="PlaylistShow">
        <header className="PlaylistShow__header">
          <img src={ playlist.image } className="PlaylistShow__img" />
          <h2 className="PlaylistShow__h2">{ playlist.title }</h2>
          <section className="PlaylistShow__section">
            <div className="PlaylistShow__div">By { user.username }</div>
            <div className="PlaylistShow__div">
              { playlist.count } songs
            </div>
            <button
              className="PlaylistShow__btn--play"
              onClick={() => console.log(`playing ${playlist.id}`)}>
              Play
            </button>
          </section>
        </header>
        <TrackIndex tracks={ tracks } />
      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const defaultPlaylist = { id: 0, title: '', count: 0, trackIds: [] };
  const playlist = getPlaylistById(state, id) || defaultPlaylist;
  const user = getUserById(state, playlist.userId) || { username: '' };
  const tracks = getTracksByIdArray(state, playlist.trackIds);

  return {
    playlist,
    user,
    tracks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
