import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';

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
