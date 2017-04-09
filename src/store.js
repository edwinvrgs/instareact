import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Default data
const defaultState = {
  search: [],
  profile: null,
  posts: null,
  fetching: false,
  token: null
};

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(applyMiddleware(middleware, thunk))
);

export default store;
