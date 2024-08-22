// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { getLatestMovies, getLatestTVShows } from '../services/api';
import MovieCard from '../components/MovieCard';
import TVShowCard from '../components/TVshowCard';
import NavBar from '../components/NavBar'; 
import './HomePage.css'; 

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    getLatestMovies().then(response => setMovies(response.data.results));
    getLatestTVShows().then(response => setTVShows(response.data.results));
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Trending Movies</h1>
      <div className="trending-movies">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <h1>Trending TV Shows</h1>
      <div className="trending-tvshows">
        {tvShows.map(tvShow => (
          <TVShowCard key={tvShow.id} tvShow={tvShow} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
