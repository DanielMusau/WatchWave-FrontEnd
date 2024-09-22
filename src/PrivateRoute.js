import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('jwtToken');

  // If token doesn't exist, redirect to the sign-in page
  if (!token) {
    return <Navigate to="/signin" />;
  }

  // If token exists, render the child component
  return children;
};

export default PrivateRoute;
