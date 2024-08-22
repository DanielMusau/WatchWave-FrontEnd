// src/components/MovieCard.js
import React, { useState } from 'react';
import './MovieCard.css'; // Import CSS file for styling
import Modal from './Modal'; // Import the Modal component

const MovieCard = ({ movie, onAddFavorite }) => {
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
        <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} />
        <h3>{movie.title}</h3>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        movie={movie}
        onAddFavorite={onAddFavorite}
      />
    </div>
  );
};

export default MovieCard;
