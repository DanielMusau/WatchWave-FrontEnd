import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import SearchResultsPage from './pages/SearchResultsPage';
import WatchlistPage from './pages/WatchListPage';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/search-results"
          element={
            <PrivateRoute>
              <SearchResultsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/watchlist"
          element={
            <PrivateRoute>
              <WatchlistPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
