import React from 'react';
import PlaylistIndexItem from './playlist_index_item';

export default ({ header, playlists }) => {
  const indexItems = playlists.map(playlist => {
    return <PlaylistIndexItem key={ playlist.id } playlist={ playlist } />;
  })
  return (
    <section className="PlayListIndex">
      { header }
      <ul className="PlaylistIndex__ul">
        { indexItems }
      </ul>
    </section>
  );
};
