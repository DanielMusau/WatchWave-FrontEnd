import axios from 'axios';

const API_URL = 'http://watch-wave.azurewebsites.net/api';

const token = localStorage.getItem('jwtToken');

export const getLatestMovies = () => axios.get(`${API_URL}/home/latest-movies`, {
  headers: { Authorization: `Bearer ${token}` }
});

export const getLatestTVShows = () => axios.get(`${API_URL}/home/latest-series`, {
  headers: { Authorization: `Bearer ${token}` }
});

export const addFavorite = (userId, itemId) => axios.post(`${API_URL}/add-to-watchlist`, 
  { userId, itemId },
  { headers: { Authorization: `Bearer ${token}` } }
);
