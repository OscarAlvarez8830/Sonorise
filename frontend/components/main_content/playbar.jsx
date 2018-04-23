import React from 'react';
import { connect } from 'react-redux';
import {
  playTrack,
  pauseTrack,
  unpauseTrack,
  nextTrack,
  prevTrack,
} from '../../actions/ui_actions';
import { getCurrentTrack } from '../../reducers';

export const Playbar = ({
  currentTrack,
  playTrack,
  pauseTrack,
  unpauseTrack,
  nextTrack,
  prevTrack
}) => {

  const audio = currentTrack ? currentTrack.audio : {};
  return (
    <footer className="Playbar">
      <div className="Playbar__div--audio-cover">
        <div>Prev</div>
        <div>Play</div>
        <div>Next</div>
      </div>
      <audio src={audio.url} />
    </footer>
  );
};

const mapStateToProps = state => {
  return {
    currentTrack: getCurrentTrack(state),
  };
};

export default connect(mapStateToProps, {
  playTrack,
  pauseTrack,
  unpauseTrack,
  nextTrack,
  prevTrack,
})(Playbar);
