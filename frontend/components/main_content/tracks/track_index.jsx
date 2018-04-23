import React from 'react';
import TrackIndexItem from './track_index_item';

export default ({ tracks, playTrack }) => {
  const trackIds = tracks.map(track => track.id);
  const trackItems = tracks.map((track, idx) => {
    return (
      <TrackIndexItem
        key={track.id}
        ord={idx}
        playTrack={e => playTrack(idx)}
        trackIds={trackIds}
        track={track} />
    );
  });
  return (
    <ol className="TrackIndex">
      {trackItems}
    </ol>
  );
};

// given whether this is the current queue, determine whether each of the tracks is the current track
