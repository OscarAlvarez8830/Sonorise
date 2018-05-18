import React from 'react';
import TrackIndexItem from './track_index_item';

export default ({ trackIds, playTrack }) => {
  const trackItems = trackIds.map((trackId, idx) => {
    return (
      <TrackIndexItem
        key={trackId}
        ord={idx}
        playTrack={e => playTrack(idx)}
        trackId={trackId} />
    );
  });
  return (
    <ol className="TrackIndex">
      {trackIds.length ? trackItems : noResults}
    </ol>
  );
};

const noResults = <h2 className="TrackIndex__h2">No results here!</h2>
