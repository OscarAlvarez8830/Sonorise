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
      {trackItems}
    </ol>
  );
};
