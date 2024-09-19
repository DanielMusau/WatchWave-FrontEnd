import React from 'react';
import { addToWatchlist, removeFromWatchlist } from '../services/api';
import './Modal.css';

const Modal = ({ isOpen, onClose, movie, showDeleteButton, type, onRemoveSuccess }) => {
  if (!isOpen) return null;

  const handleAddToWatchlist = async () => {
    try {
      const response = await addToWatchlist(movie, type);
      if (response.status === 201) {
        alert('Added to watchlist!');
      } else {
        alert('Failed to add to watchlist.');
      }
    } catch (error) {
      console.error('Error adding to watchlist:', error);
      alert('Error adding to watchlist.');
    }
  };

  const handleRemoveFromWatchlist = async () => {
    try {
      const response = await removeFromWatchlist(movie.id);
      if (response.status === 200) {
        alert('Removed from watchlist!');
        if (onRemoveSuccess) onRemoveSuccess(); // Call the callback on success
        onClose()
      } else {
        alert('Failed to remove from watchlist.');
      }
    } catch (error) {
      console.error('Error removing from watchlist:', error);
      alert('Error removing from watchlist.');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{movie.title || movie.name}</h2>
        <img src={`https://image.tmdb.org/t/p/w342/${movie.backdrop_path || movie.poster_path}`} alt={movie.title || movie.name} />
        <p>{movie.overview}</p>
        {!showDeleteButton && (
          <button onClick={handleAddToWatchlist}>Add to Watchlist</button>
        )}
        {showDeleteButton && (
          <button onClick={handleRemoveFromWatchlist}>Remove from Watchlist</button>
        )}
      </div>
    </div>
  );
};

export default Modal;