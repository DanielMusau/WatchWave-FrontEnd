import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { searchMoviesAndTVShows } from '../services/api';
import './NavBar.css';

const NavBar = () => {
  const [isWatchlistVisible, setWatchlistVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const toggleWatchlist = () => {
    setWatchlistVisible(!isWatchlistVisible);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      if (inputValue.trim()) {
        try {
          const response = await searchMoviesAndTVShows(inputValue);
          navigate('/search-results', { 
            state: { 
              results: response.data.results,
              query: inputValue
            },
            search: `?query=${encodeURIComponent(inputValue)}`
          });
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Watch Wave</Link>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="navbar-profile">
        <button onClick={toggleWatchlist} className="profile-icon">
          <img src="/path-to-profile-icon.png" alt="Profile" />
        </button>
        {isWatchlistVisible && (
          <div className="watchlist-dropdown">
            <h3>Watchlist</h3>
            <p>No items in watchlist</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
