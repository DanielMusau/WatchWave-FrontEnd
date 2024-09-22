// src/pages/SearchResultsPage.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Modal from '../components/Modal';
import './styles/SearchResultsPage.css';

const placeholderImage = 'https://via.placeholder.com/200x300?text=No+Image';

const SearchResultsPage = () => {
  const location = useLocation();
  const { results, query } = location.state || {};
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Filter out entries where media_type is 'person'
  const filteredResults = results?.filter(item => item.media_type === 'movie' || item.media_type === 'tv');

  return (
    <div>
      <NavBar />
      <h1>Results for "{query}"</h1>
      <div className="search-results">
        <div className="results-container">
          {filteredResults?.map(item => (
            <div
              key={item.id}
              className="search-result-card"
              onClick={() => handleCardClick(item)}
            >
              <img
                src={item.poster_path ? `https://image.tmdb.org/t/p/w342/${item.poster_path}` : placeholderImage}
                alt={item.title || item.name}
              />
              <h3>{item.title || item.name}</h3>
            </div>
          ))}
        </div>
      </div>
      {selectedItem && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          movie={selectedItem} // Passing selected item to Modal
        />
      )}
    </div>
  );
};

export default SearchResultsPage;
