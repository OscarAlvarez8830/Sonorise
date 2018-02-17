import React from 'react';
import { connect } from 'react-redux';
import { openModal } from 'actions/ui_actions';
import PlaylistCreateForm from './playlists/create_playlist';

const mapDispatchToProps = dispatch => {
  return {
    openModal: () => dispatch(openModal(<PlaylistCreateForm />)),
  };
};

const CreateButton = ({ openModal }) => {
  return (
    <button className="CreateButton" onClick={openModal}>New Playlist</button>
  );
};

export default connect(null, mapDispatchToProps)(CreateButton);
