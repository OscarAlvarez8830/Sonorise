import React from 'react';
import { connect } from 'react-redux';
import TrackIndexItem from './track_index_item';

const TrackIndex = ({ playTrack, tracks }) => {
  const trackItems = tracks.map(track => {
    return (
      <TrackIndexItem
        key={ track.id }
        track={ track }
        playTrack={ playTrack } />
    );
  });
  return (
    <ul className="TrackIndex">
      { trackItems }
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    playTrack: id => {},
  };
};

export default connect(null, mapDispatchToProps)(TrackIndex);
