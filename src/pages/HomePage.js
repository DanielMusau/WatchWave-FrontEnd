// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { getLatestMovies, getLatestTVShows, addFavorite } from '../services/api';
import MovieCard from '../components/MovieCard';
import TVShowCard from '../components/TVshowCard';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    getLatestMovies().then(response => setMovies(response.data.results));
    getLatestTVShows().then(response => setTVShows(response.data.results));
  }, []);
  
  const handleAddFavorite = (itemId) => {
    const userId = 1; // Assuming the user is logged in and has an ID of 1
    addFavorite(userId, itemId).then(() => {
      alert('Added to favorites!');
    });
  };

  return (
    <div>
      <h1>Trending Movies</h1>
      <div className="trending-movies">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} onAddFavorite={handleAddFavorite} />
        ))}
      </div>
      <h1>Trending TV Shows</h1>
      <div className="trending-tvshows">
        {tvShows.map(tvShow => (
          <TVShowCard key={tvShow.id} tvShow={tvShow} onAddFavorite={handleAddFavorite} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
