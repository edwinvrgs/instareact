import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import rootReducer from './reducers/index';

//Default data
const defaultState = {
  search: {
    results: []
  },
  profile: {
    data: null,
    media: null //O posts
  },
  token: null
};

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(middleware)
);

export default store;
