import { FETCHING_DATA } from '../actions/constants';

const fetching = (state = false, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return state? false : true;
    default:
      return state;
  }
};

export default fetching;
