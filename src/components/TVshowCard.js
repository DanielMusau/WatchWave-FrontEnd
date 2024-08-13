// src/components/TVShowCard.js
import React from 'react';

const TVShowCard = ({ tvShow, onAddFavorite }) => (
  <div className="tvshow-card">
    <img src={tvShow.posterUrl} alt={tvShow.title} />
    <h3>{tvShow.title}</h3>
    <button onClick={() => onAddFavorite(tvShow.id)}>Add to Favorites</button>
  </div>
);

export default TVShowCard;
