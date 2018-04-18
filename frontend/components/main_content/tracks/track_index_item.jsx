import React from 'react';
import { connect } from 'react-redux';
import { getArtistById, getPlayingState } from 'reducers';
import { playTrack, pauseTrack, unpauseTrack } from 'actions/ui_actions';

const TrackIndexItem = ({ track, playTrack, pauseTrack, artist, ord }) => {
  return (
    <li className="TrackIndexItem">
      <div className="TrackIndexItem__div--ord">{ord + 1}.</div>
      <div className="TrackIndexItem__div">
        <div className="TrackIndexItem__div--title">
          <span className="TrackIndexItem__span--title">{track.title}</span>
        </div>
        <div className="TrackIndexItem__div--artist">
          {artist.name}
        </div>
      </div>
      <div className="TrackIndexItem__div--time">
        {track.duration}
      </div>
    </li>
  );
};

// given whether this is the current track, determine whether to show pause or play

const PlayButton = ({ playTrack, pauseTrack, playing }) => {
  let action;
  let icon;
  if (playing) {
    action = pauseTrack;
    icon = <i className="fas fa-pause"></i>;
  } else {
    action = playTrack;
    icon = <i className="fas fa-play"></i>;
  }
  return (
    <button onClick={action}>{icon}</button>
  );
};

const mapStateToProps = (state, { track }) => {
  return {
    artist: getArtistById(state, track.artistId),
    playing: getPlayingState(state),
  };
};

export default connect(mapStateToProps, { playTrack, pauseTrack })(TrackIndexItem);
