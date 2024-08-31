// Playlist.js
import React, { useState } from 'react';

export function Playlist({ tracks, removeTrack }) {
  const [playlistName, setPlaylistName] = useState('');

  const handleRemoveTrack = (trackToRemove) => {
    removeTrack(trackToRemove);
  };

  const handleCreatePlaylist = () => {
    //removing white spaces before and after
    if (playlistName.trim() === '') {
      alert('Please enter a playlist name.');
      return;
    }

    const artists = new Set();
    const albums = new Set();

    tracks.forEach(track => {
      artists.add(track.artist);
      albums.add(track.album);
    });

    const artistList = Array.from(artists).join(', ');
    const albumList = Array.from(albums).join(', ');

    alert(`Playlist "${playlistName}" created with ${tracks.length} tracks!\n\nArtists: ${artistList}\nAlbums: ${albumList}`);

    // Reseting playlist name
    setPlaylistName('');
  };

  return (
    <div className="PlaylistDiv">
      <h2>Create a Playlist</h2>
      <div className="PlaylistNameInput">
        <input
          type="text"
          placeholder="Enter playlist name"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
      </div>
      <ul className="PlaylistTracks">
        {tracks.length === 0 ? (
          <li>No tracks added</li>
        ) : (
          tracks.map((track, index) => (
            <li key={index} className="PlaylistTrackItem">
              <span>{track.name} - By: {track.artist} (Album: {track.album})</span>
              <button onClick={() => handleRemoveTrack(track)} className="RemoveTrackButton">
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
      <button onClick={handleCreatePlaylist} className="CreatePlaylistButton">
        Create Playlist
      </button>
    </div>
  );
}
