import React from 'react';
import { connect } from 'react-redux';
import { getArtistById } from 'reducers/entities/artists_reducer';

const TrackIndexItem = ({ track, playTrack, artist }) => {
  return (
    <li className="TrackIndexItem">
      <div className="TrackIndexItem__div">
        <div className="TrackIndexItem__div--title">
          { track.title }
        </div>
        <div className="TrackIndexItem__div--artist">
          { artist.name }
        </div>
      </div>
      <div className="TrackIndexItem__div--time">
        { track.duration }
      </div>
    </li>
  );
};

const mapStateToProps = (state, { track }) => {
  return {
    artist: getArtistById(state, track.artistId),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    playTrack: id => {},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndexItem);
