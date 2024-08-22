// src/components/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, movie, onAddFavorite }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{movie.title || movie.name}</h2>
        <img src={`https://image.tmdb.org/t/p/w342/${movie.backdrop_path || movie.poster_path}`} alt={movie.title} />
        <p>{movie.overview}</p>
        <button onClick={() => onAddFavorite(movie)}>Add to Watchlist</button>
      </div>
    </div>
  );
};

export default Modal;
