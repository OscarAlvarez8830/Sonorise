import React from 'react';
import { Link } from 'react-router-dom';

export default ({ playlist }) => {
  return (
    <li className="PlaylistIndexItem">
      <Link
        to={ `/playlist/${playlist.id}` }
        className="PlaylistIndexItem__link">
        <img
          src={ playlist.image }
          alt="album-art"
          className="PlaylistIndexItem__img" />
        <span className="PlaylistIndexItem__span">{ playlist.title }</span>
      </Link>
    </li>
  );
};
