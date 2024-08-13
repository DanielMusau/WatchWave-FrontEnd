// src/services/api.js
import axios from 'axios';

const API_URL = 'http://watch-wave.azurewebsites.net/api'; // Adjust as needed

export const getLatestMovies = () => axios.get(`${API_URL}/home/latest-movies`);
export const getLatestTVShows = () => axios.get(`${API_URL}/home/latest-series`);
export const addFavorite = (userId, itemId) => axios.post(`${API_URL}/add-to-watchlist`, { userId, itemId });
