import React from 'react';
import TrackIndexItem from './track_index_item';

export default ({ tracks }) => {
  const trackItems = tracks.map((track, idx) => {
    return (
      <TrackIndexItem
        key={ track.id }
        ord={ idx + 1 }
        track={ track } />
    );
  });
  return (
    <ol className="TrackIndex">
      { trackItems }
    </ol>
  );
};
