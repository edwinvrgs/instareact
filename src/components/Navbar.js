import React, { Component, PropTypes } from 'react'
import { NavLink, Link, Redirect } from 'react-router-dom';

import SearchBar from './SearchBar';

import FaCompass from 'react-icons/lib/fa/compass';
import FaUser from 'react-icons/lib/fa/user';
import FaHeart from 'react-icons/lib/fa/heart';
import FaInstagram from 'react-icons/lib/fa/instagram';

import '../styles/App.css';

const Navbar = () => (
  <nav>
    <div className="container">
      <div className="navbar">
        <div className="index-section">
          <NavLink exact activeClassName='active' to='/'><FaInstagram /> | Instagram </NavLink>
        </div>
        <div className="search-section">
          <SearchBar />
        </div>
        <div className="icons-section">
          <NavLink activeClassName='active' className="icon" to='/profile'><FaCompass /></NavLink>
          <NavLink activeClassName='active' className="icon" to='/profile'><FaHeart /></NavLink>
          <a className="icon" href='https://api.instagram.com/oauth/authorize/?client_id=acdb62c4d44e4582abdec8ac0c69675d&redirect_uri=http://localhost:3000/&response_type=token'><FaUser /></a>
        </div>
      </div>
    </div>
  </nav>
);


export default Navbar;
