import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  playTrack,
  pauseTrack,
  unpauseTrack,
  nextTrack,
  prevTrack,
} from '../../actions/ui_actions';
import { getCurrentTrack, getPlayingState } from '../../reducers';

class Playbar extends Component {
  componentDidUpdate() {
    if (!this.props.currentTrack) return;
    this.props.playing ? this.player.play() : this.player.pause();
  }

  playButton() {
    let action = e => {};
    let klass = 'far fa-play-circle';
    if (this.props.currentTrack) {
      if (this.props.playing) {
        action = this.props.pauseTrack;
        klass = 'far fa-pause-circle';
      } else {
        action = this.props.unpauseTrack;
      }
    }

    return <i className={klass} onClick={action}></i>;
  }

  render() {
    const { currentTrack, playing, prevTrack, nextTrack } = this.props;

    let audio = '';
    let title = '';
    let artist = '';
    let albumArt = '';

    if (currentTrack) {
      audio = currentTrack.audio;
      title = currentTrack.title;
      artist = currentTrack.artist;
      albumArt = currentTrack.albumArt; // make an album table
    }

    return (
      <footer className="Playbar">
        <div className="Playbar__div--track-info">
          <img className="Playbar__img--album-art" src={albumArt} alt="album art" />
          <span className="Playbar__span--track-title">{title}</span>
          <span className="Playbar__span--track-artist">{artist}</span>
        </div>
        <div className="Playbar__div--audio-cover">
          <i className="fas fa-step-backward" onClick={prevTrack}></i>
          {this.playButton()}
          <i className="fas fa-step-forward" onClick={nextTrack}></i>
        </div>
        <div className="Playbar__div--queue-slider">
          
        </div>
        <audio ref={player => this.player = player} src={audio} autoPlay={playing} />
      </footer>
    );
  }
}

const mapStateToProps = state => {
  // write and use a selector to get artist for current track
  return {
    currentTrack: getCurrentTrack(state),
    playing: getPlayingState(state),
  };
};

export default connect(mapStateToProps, {
  playTrack,
  pauseTrack,
  unpauseTrack,
  nextTrack,
  prevTrack,
})(Playbar);
