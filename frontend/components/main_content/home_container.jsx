import { connect } from 'react-redux';
import PlaylistIndex from './playlist_index';
import { getCurrentUser } from '../../reducers/session_reducer';
import { getUserById } from '../../reducers/entities/users_reducer';
import {
  getPlaylistsByIdArray
} from '../../reducers/entities/playlists_reducer';

const mapStateToProps = state => {
  const user = getUserById(state, getCurrentUser(state));
  let playlists;
  if (user) playlists = getPlaylistsByIdArray(state, user.playlistIds);
  return {
    playlists
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);
