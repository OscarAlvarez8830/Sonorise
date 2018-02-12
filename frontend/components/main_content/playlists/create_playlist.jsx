import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPlaylist } from 'actions/playlist_actions';
import { closeModal } from 'actions/ui_actions';

class PlaylistCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  closeModal(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.closeModal();
  }

  handleSubmit(e) {
    e.preventDefault();
    const playlist = Object.assign({}, this.state);
    this.props.submit(playlist).then(this.props.closeModal);
  }

  updateTitle(e) {
    this.setState({ title: e.currentTarget.value });
  }

  render() {
    return (
      <div className="PlaylistCreateForm">
        <button
          className="PlaylistCreateForm__button--close"
          onClick={ this.props.closeModal }>
          X
        </button>
        <h2 className="PlaylistCreateForm__h2">Create new playlist</h2>
        <form
          className="PlaylistCreateForm__form"
          onSubmit={ this.handleSubmit }>
          <fieldset className="PlaylistCreateForm__fieldset">
            <label className="PlaylistCreateForm__label" htmlFor="playlist-title">Playlist Name</label>
            <input
              className="PlaylistCreateForm__input"
              onChange={ this.updateTitle }
              placeholder="Start typing..."
              value={ this.state.title } />
          </fieldset>
          <section className="PlaylistCreateForm__section">
            <button
              className="PlaylistCreateForm__btn PlaylistCreateForm__btn--cancel"
              onClick={ this.closeModal }>
              Cancel
            </button>

            <button
              className="PlaylistCreateForm__btn PlaylistCreateForm__btn--save">
              Create
            </button>
          </section>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    submit: playlist => dispatch(createPlaylist(playlist)),
  };
};

export default connect(null, mapDispatchToProps)(PlaylistCreateForm);
