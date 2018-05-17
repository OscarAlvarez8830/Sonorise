import React from 'react';
import ArtistIndexItem from './artist_index_item';

export default ({ artists }) => {
  const indexItems = artists.map(artist => {
    return <ArtistIndexItem key={artist.id} artist={artist} />;
  });

  return (
    <section className="PlayListIndex">
      <ul className="PlaylistIndex__ul">
        {artists.length ? indexItems : noResults}
      </ul>
    </section>
  );
};

const noResults = <h2 className="ArtistIndex__h2">No results here!</h2>
