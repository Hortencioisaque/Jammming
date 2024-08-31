import { songs } from '../../util/songs.js';

export const SearchResults = (term) => {
  return songs
    .filter(song => song.name.toLowerCase().includes(term.toLowerCase()))
    .map(song => ({
      id: song.id,
      name: song.name,
      artist: song.artist,
      album: song.album
    }));
};

// Example usage for testing
/*
const searchTerm = 'Jesus';
const results = SearchResults(searchTerm);
console.log(results);
*/

export default SearchResults;
