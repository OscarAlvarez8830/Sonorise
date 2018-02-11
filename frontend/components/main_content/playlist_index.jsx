import React from 'react';
import PlaylistIndexItem from './playlist_index_item';

export default ({ playlists }) => {
  const indexItems = playlists.map(playlist => {
    debugger
    return <PlaylistIndexItem key={ playlist.id } playlist={ playlist } />;
  })
  return (
    <ul className="PlaylistIndex">
      { indexItems }
    </ul>
  );
};
