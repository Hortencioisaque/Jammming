import React from 'react';

export function Track(props) {
  const { track, removeTrack } = props;

  const handleRemoveClick = () => {
    removeTrack(track.id);
  };

  return (
    <li className="Track">
      <button
        aria-label="Remove track"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">
        <strong>{track.name}</strong> - By: {track.artist} (Album: {track.album})
      </div>
    </li>
  );
}
