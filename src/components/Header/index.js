import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link, useHistory } from 'react-router-dom';
import './index.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const history = useHistory();

  useEffect(() => {
    const jwtToken = Cookies.get('jwt_token');
    setIsLoggedIn(!!jwtToken); // Check if token exists
  }, []); // Run effect only once on mount

  const onClickLogout = () => {
    Cookies.remove('jwt_token');
    setIsLoggedIn(false);
    history.replace('/login');
  };

  return (
    <nav className="navbar-container">
      <div>
        <Link to="/" className="link-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </Link>
      </div>
      <ul className="header-list-items">
        <Link to="/" className="link-item">
          <li className="home-heading home">Home</li>
        </Link>
        <Link to="/jobs" className="link-item">
          <li className="jon-heading home">Jobs</li>
        </Link>
      </ul>
      <div>
        {isLoggedIn ? (
          <button type="button" className="logout-button" onClick={onClickLogout}>
            Logout
          </button>
        ) : null}
        
      </div>
    </nav>
  );
};

export default Header;
