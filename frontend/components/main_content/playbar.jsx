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

export const Playbar = props => {
  return (
    <footer className="Playbar">
      
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
