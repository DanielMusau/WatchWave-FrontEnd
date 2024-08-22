import axios from 'axios';

const API_URL = ' http://127.0.0.1:5000/api';

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

export const searchMoviesAndTVShows = (query) => {
  return axios.get(`${API_URL}/home/search`, {
    params: { query },
    headers: { Authorization: `Bearer ${token}` } 
  });
};
