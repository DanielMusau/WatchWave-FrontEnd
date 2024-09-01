import React, { useEffect, useState } from 'react';
import { getWatchlist, removeFromWatchlist } from '../services/api';
import Modal from '../components/Modal';
import './SearchResultsPage.css';
import NavBar from '../components/NavBar'; 

const placeholderImage = 'https://via.placeholder.com/200x300?text=No+Image';

const WatchlistPage = () => {
  const [watchlistItems, setWatchlistItems] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    getWatchlist().then(response => setWatchlistItems(response.data));
  }, []);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedItem(null); 
  };

  const handleRemoveFromWatchlist = async (id) => {
    try {
      await removeFromWatchlist(id);
      setWatchlistItems(watchlistItems.filter(item => item.id !== id));
      handleCloseModal();
    } catch (error) {
      console.error('Error removing item from watchlist:', error);
    }
  };

  return (
    <div>
      <NavBar />
      <h1>My Watchlist</h1>
      <div className="search-results">
        <div className="results-container">
          {watchlistItems.map(item => (
            <div
              key={item.id}
              className="search-result-card"
              onClick={() => handleCardClick(item)}
            >
              <img
                src={item.poster_path ? `https://image.tmdb.org/t/p/w342/${item.poster_path}` : placeholderImage}
                alt={item.title}
              />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
      {selectedItem && (
        <Modal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          movie={selectedItem}  // Pass selectedItem as movie
          type="watchlist"       // Example type, adjust as needed
        />
      )}
    </div>
  );
};

export default WatchlistPage;
