import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import search from './search';
import profile from './profile';
import posts from './posts';
import fetching from './fetching';
import token from './token';

const rootReducer = combineReducers({
    search,
    profile,
    posts,
    token,
    fetching,
    router: routerReducer
});

export default rootReducer;
