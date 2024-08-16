// src/components/TVShowCard.js
import React from 'react';
import './MovieCard.css'; 

const TVShowCard = ({ tvShow, onAddFavorite }) => (
  <div className="movie-card">
    <img src={`https://image.tmdb.org/t/p/w342/${tvShow.poster_path}`} alt={tvShow.title} />
    <h3>{tvShow.title}</h3>
    <button onClick={() => onAddFavorite(tvShow.id)}>Add to Favorites</button>
  </div>
);

export default TVShowCard;
