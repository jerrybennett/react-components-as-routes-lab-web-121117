import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => {
        return <div>
          <h2>{movie.title}</h2>
          <p>Length: {movie.time}</p>
          <h4>Genre:</h4>
          <ul>
            {movie.genres.map(genre => {
              return <li>{genre}</li>
            })}
          </ul>
        </div>
      })}
    </div>
  );
};

export default Movies;
// title: 'Doctor Strange',
// time: 115,
// genres: ['Action', 'Adventure', 'Fantasy'],
// metascore: 74
