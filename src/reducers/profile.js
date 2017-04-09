import { UPDATE_PROFILE } from '../actions/constants';

const profile = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return action.data;
    default:
      return state;
  }
};

export default profile;
