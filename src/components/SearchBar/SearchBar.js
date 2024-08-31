
import React from 'react';

export function SearchBar({ text, onTextChange }) {
  return (
    <form className="SearchBar">
      <input
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        type="text"
        aria-label="Search for a song"
        placeholder="Enter a song name"
      />
    </form>
  );
}
