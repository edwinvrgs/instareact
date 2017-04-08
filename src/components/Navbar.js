import React, { Component, PropTypes } from 'react'
import { NavLink } from 'react-router-dom';

import '../styles/App.css';

const Navbar = () => (
  <nav>
    <NavLink exact activeClassName='active' to='/'>Home</NavLink>
    <NavLink activeClassName='active' to='/profile'>Perfil</NavLink>
  </nav>
);


export default Navbar;
