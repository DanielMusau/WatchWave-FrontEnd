// src/components/TVShowCard.js
import React, { useState } from 'react';
import './styles/MovieCard.css';
import Modal from './Modal';

const TVShowCard = ({ tvShow }) => {
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
        type="tv" // Set type as "tv" for TV shows
      />
    </div>
  );
};

export default TVShowCard;
