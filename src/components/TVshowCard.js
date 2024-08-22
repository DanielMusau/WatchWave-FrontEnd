// src/components/TVShowCard.js
import React, { useState } from 'react';
import './MovieCard.css'; // Reuse styling from MovieCard.css
import Modal from './Modal'; // Reuse the Modal component

const TVShowCard = ({ tvShow, onAddFavorite }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="movie-card" onClick={handleCardClick}>
        <img src={`https://image.tmdb.org/t/p/w342/${tvShow.poster_path}`} alt={tvShow.name} />
        <h3>{tvShow.name}</h3>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        movie={tvShow} // Reusing movie prop for TV show
        onAddFavorite={onAddFavorite}
      />
    </div>
  );
};

export default TVShowCard;
