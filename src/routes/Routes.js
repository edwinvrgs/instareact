import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import Home from '../components/Home';
import Perfil from '../components/Perfil';

class Routes extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <IndexRoute component={Home} />
        <Route path='/profiles/(:id)' component={Perfil} />
      </Router>
    );
  }
}

export default Routes;
