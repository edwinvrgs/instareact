import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import profile from './profile';
import search from './search';
import token from './token';

const rootReducer = combineReducers({
    search,
    profile,
    token,
    router: routerReducer
});

export default rootReducer;
