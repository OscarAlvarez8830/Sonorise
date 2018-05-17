import React from 'react';
import { Link } from 'react-router-dom';

export default ({ artist }) => {
  return (
    <li className="PlaylistIndexItem">
      <Link
        to={`/artist/${artist.id}`}
        className="PlaylistIndexItem__link">
        <img
          src={artist.image}
          alt="album-art"
          className="PlaylistIndexItem__img" />
        <span className="PlaylistIndexItem__span">{artist.name}</span>
      </Link>
    </li>
  );
};
