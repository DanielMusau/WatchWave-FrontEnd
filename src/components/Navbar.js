import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/signin">Sign In</Link>
    <Link to="/signup">Sign Up</Link>
  </nav>
);

export default Navbar;
