import React from 'react';

export default ({ track, playTrack }) => {
  return (
    <li className="TrackIndexItem">
      { track.title }
    </li>
  );
};
