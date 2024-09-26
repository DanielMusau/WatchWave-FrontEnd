import axios from 'axios';

const API_URL = 'https://watchwave-43z2.onrender.com/api';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: API_URL,
});

// Axios interceptor to attach the token dynamically for every request
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwtToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const signup = (username, email, password) => {
  return apiClient.post('/signup', { username, email, password });
}

export const login = (email, password) => {
  return apiClient.post('/login', { email, password });
};

// API functions using the Axios instance
export const getLatestMovies = () => {
  return apiClient.get('/home/latest-movies');
};

export const getLatestTVShows = () => {
  return apiClient.get('/home/latest-series');
};

export const searchMoviesAndTVShows = (query) => {
  return apiClient.get('/home/search', {
    params: { query },
  });
};

export const getWatchlist = () => {
  return apiClient.get('/watchlist');
};

export const addToWatchlist = (movie, type) => {
  return apiClient.post('/add-to-watchlist', {
    title: movie.title || movie.name,
    external_id: movie.id,
    poster_path: movie.poster_path,
    type: type,
    overview: movie.overview
  });
};

export const removeFromWatchlist = (watchlistId) => {
  return apiClient.delete(`/remove-from-watchlist/${watchlistId}`);
};

export default apiClient;
