// TrackList.js
import React, { useState, useEffect } from 'react';
import { SearchResults } from '../SearchResults/SearchResults';
import { SearchBar } from '../SearchBar/SearchBar';
import { Playlist } from '../Playlist/Playlist';

export function TrackList() {
  const [text, setText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    if (text.length > 0) {
      const results = SearchResults(text);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [text]);

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleAddTrack = (track) => {
    const newTrack = {
      ...track,
    };

    setTracks([...tracks, newTrack]);
    setText('');
    setSearchResults([]);
  };

  const handleRemoveTrack = (trackToRemove) => {
    setTracks(tracks.filter(track => track !== trackToRemove));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="TrackListContainer">
      <div className="TrackListDiv">
        <SearchBar text={text} onTextChange={handleTextChange} />

        <ul className="SearchResults">
          {searchResults.map((result) => (
            <li key={result.name} className="SearchResultItem">
              <span>{result.name} - By: {result.artist} (Album: {result.album})</span>
              <button onClick={() => handleAddTrack(result)}>Add</button>
            </li>
          ))}
        </ul>
      </div>
      <Playlist tracks={tracks} removeTrack={handleRemoveTrack} />
    </div>
  );
}
