import { SET_TOKEN_ACCESS } from '../actions/constants';

const token = (state = {}, action) => {
  switch (action.type) {
    case SET_TOKEN_ACCESS:
      return action.token;
    default:
      return state;
  }
};

export default token;
