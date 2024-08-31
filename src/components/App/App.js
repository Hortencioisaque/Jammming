import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { TrackList } from '../TrackList/TrackList';
import { Track } from '../Track/Track';
import './App.css';

function App() {
  const [tracks, setTracks] = useState([]);

  const addTrack = (track) => {
    setTracks((tracks) => [track, ...tracks]);
  }

  const removeTrack = (trackIdToRemove) => {
  setTracks((tracks) =>
    tracks.filter((track) => track.id !== trackIdToRemove)
  );
};

  return (
    <div className="App">
      <header>
        <h1>Search for Tracks</h1>
      </header>
      <main>
        <TrackList addTrack={addTrack} />
        <ul className="tracks">
          {tracks.map((track) => (
            <Track key={track.id} track={track} removeTrack={removeTrack} />
          ))}
        </ul>
        
      </main>
    </div>
  );
}

export default App;
