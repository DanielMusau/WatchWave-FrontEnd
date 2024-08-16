// src/components/MovieCard.js
import React from 'react';
import './MovieCard.css'; // Import CSS file for styling

const MovieCard = ({ movie, onAddFavorite }) => (
  <div className="movie-card">
    <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} />
    <h3>{movie.title}</h3>
    <button onClick={() => onAddFavorite(movie.id)}>Add to Favorites</button>
  </div>
);

export default MovieCard;
