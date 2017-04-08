import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers } from 'redux'
import { ConnectedRouter, routerReducer } from 'react-router-redux'

import profile from './profile';
import search from './search';
import token from './token';

const rootReducer = combineReducers({
    profile,
    search,
    token,
    router: routerReducer
});

export default rootReducer;
