// src/components/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file for styling

const NavBar = () => {
  const [isWatchlistVisible, setWatchlistVisible] = useState(false);

  const toggleWatchlist = () => {
    setWatchlistVisible(!isWatchlistVisible);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Watch Wave</Link>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-profile">
        <button onClick={toggleWatchlist} className="profile-icon">
          <img src="/path-to-profile-icon.png" alt="Profile" />
        </button>
        {isWatchlistVisible && (
          <div className="watchlist-dropdown">
            <h3>Watchlist</h3>
            {/* Here you can add code to display the watchlist items */}
            <p>No items in watchlist</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
