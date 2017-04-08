import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../components/Home';
import Perfil from '../components/Perfil';
import Navbar from '../components/Navbar';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Perfil} />
    </div>
  </Router>
);

export default App;
