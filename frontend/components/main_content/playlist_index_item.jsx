import React from 'react';

export default ({ playlist }) => {
  return (
    <li className="PlaylistIndexItem">
      <img
        src={ playlist.image }
        alt="album-art"
        className="PlaylistIndexItem__img" />
      <span className="PlaylistIndexItem__span">{ playlist.title }</span>
    </li>
  );
};
