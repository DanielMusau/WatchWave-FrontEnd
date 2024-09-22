import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles/SignInPage.css';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/login', { email, password });
      const { token } = response.data;
      
      localStorage.setItem('jwtToken', token);
      
      navigate('/');
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Sign In</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSignIn} className="signin-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="signin-input"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="signin-input"
            />
          </div>
          <button type="submit" className="signin-button">Sign In</button>
        </form>
        <p className="signup-prompt">Don't have an account? <a href="/signup" className="signup-link">Sign up</a></p>
      </div>
    </div>
  );
};

export default SignInPage;
