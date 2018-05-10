import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  playTrack,
  pauseTrack,
  unpauseTrack,
  nextTrack,
  prevTrack,
} from '../../actions/ui_actions';
import { getCurrentTrack, getArtistById, getPlayingState } from '../../reducers';

class Playbar extends Component {
  constructor(props) {
    super(props);
    this.state = { volume: 0.8, progress: 0 };

    this.handleVolume = this.handleVolume.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }

  updateTime() {
    const { currentTime, duration } = this.player;
    this.setState({ progress: (currentTime / duration) * 100 });
  }

  componentDidUpdate() {
    if (!this.props.currentTrack) return;
    this.props.playing ? this.player.play() : this.player.pause();
  }

  handleVolume(e) {
    this.setState(
      { volume: e.target.value },
      () => this.player.volume = this.state.volume
    );
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
    const { currentTrack, currentArtist, playing, prevTrack, nextTrack } = this.props;

    let audio = '';
    let title = '';
    let artist = '';
    let albumArt = '';

    if (currentTrack) {
      audio = currentTrack.audio;
      title = currentTrack.title;
      artist = currentArtist.name;
      albumArt = currentTrack.albumArt;
    }

    return (
      <footer className="Playbar">
        <div className="Playbar__div--track-info">
          <img className="Playbar__img--album-art" src={albumArt} alt="album art" />
          <span className="Playbar__span--track-title">{title}</span>
          <span className="Playbar__span--track-artist">{artist}</span>
        </div>
        <div className="Playbar__div--audio-cover">
          <div className="Playbar__div--controls">
            <i className="fas fa-step-backward" onClick={prevTrack}></i>
            {this.playButton()}
            <i className="fas fa-step-forward" onClick={nextTrack}></i>
          </div>

          <div className="Playbar__div--progress-bar">
            <div
              style={{ width: `${this.state.progress}%` }}
              className="Playbar__div--progress-bar-completed" />
          </div>
        </div>
        <div className="Playbar__div--queue-slider">
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            onChange={this.handleVolume}
            value={this.state.volume} />
        </div>
        <audio
          ref={player => this.player = player}
          src={audio} autoPlay={playing}
          onEnded={nextTrack}
          onTimeUpdate={this.updateTime} />
      </footer>
    );
  }
}

const mapStateToProps = state => {
  const currentTrack = getCurrentTrack(state);
  let currentArtist = {};
  if (currentTrack) currentArtist = getArtistById(state, currentTrack.artistId);
  return {
    currentTrack,
    currentArtist,
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
