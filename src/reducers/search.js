import { UPDATE_SEARCH_RESULTS } from '../actions/constants';

const search = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_RESULTS:
      return action.results;
    default:
      return state;
  }
};

export default search;
