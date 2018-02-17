import React from 'react';
import TrackIndexItem from './track_index_item';

export default ({ tracks }) => {
  const trackItems = tracks.map(track => {
    return (
      <TrackIndexItem
        key={ track.id }
        track={ track } />
    );
  });
  return (
    <ul className="TrackIndex">
      { trackItems }
    </ul>
  );
};
