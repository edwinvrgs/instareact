import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

import store from './store';
//import { setTokenAccess } from './actions/actionCreators';

const router = (
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/profile/:id?" component={Profile} />
      </div>
    </Router>
  </Provider>
);

render(
  router,
  document.getElementById('root')
);
