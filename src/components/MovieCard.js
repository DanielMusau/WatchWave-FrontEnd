// src/components/MovieCard.js
import React from 'react';

const MovieCard = ({ movie, onAddFavorite }) => (
  <div className="movie-card">
    <img src={movie.posterUrl} alt={movie.title} />
    <h3>{movie.title}</h3>
    <button onClick={() => onAddFavorite(movie.id)}>Add to Favorites</button>
  </div>
);

export default MovieCard;
