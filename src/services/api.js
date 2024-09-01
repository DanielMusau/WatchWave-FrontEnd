import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api';

const token = localStorage.getItem('jwtToken');

export const getLatestMovies = () => axios.get(`${API_URL}/home/latest-movies`, {
  headers: { Authorization: `Bearer ${token}` }
});

export const getLatestTVShows = () => axios.get(`${API_URL}/home/latest-series`, {
  headers: { Authorization: `Bearer ${token}` }
});

export const searchMoviesAndTVShows = (query) => {
  return axios.get(`${API_URL}/home/search`, {
    params: { query },
    headers: { Authorization: `Bearer ${token}` } 
  });
};

export const getWatchlist = () => axios.get(`${API_URL}/watchlist`, {
  headers: { Authorization: `Bearer ${token}` }
});

// Add new API functions
export const addToWatchlist = (movie, type) => {
  return axios.post(`${API_URL}/add-to-watchlist`, {
    title: movie.title || movie.name,
    external_id: movie.id, 
    poster_path: movie.poster_path,
    type: type, 
  }, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const removeFromWatchlist = (watchlistId) => {
  return axios.delete(`${API_URL}/watchlist/${watchlistId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
