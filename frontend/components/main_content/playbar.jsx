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
  constructor(props) {
    super(props);
    this.playButtonAction = this.playButtonAction.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentTrack) return;
    nextProps.playing ? this.player.play() : this.player.pause();
  }

  playButtonAction() {
    if (!this.props.currentTrack) return;
    this.props.playing ? this.props.pauseTrack() : this.props.unpauseTrack();
  }

  render() {
    const { currentTrack, playing, prevTrack, nextTrack } = this.props;

    const audio = currentTrack ? currentTrack.audio : '';

    return (
      <footer className="Playbar">
        <div className="Playbar__div--audio-cover">
          <div onClick={prevTrack}>Prev</div>
          <div onClick={this.playButtonAction}>Play</div>
          <div onClick={nextTrack}>Next</div>
        </div>
        <audio ref={player => this.player = player} src={audio} autoPlay={playing} />
      </footer>
    );
  }
}

const mapStateToProps = state => {
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
