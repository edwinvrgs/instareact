import { UPDATE_MEDIA, APPEND_POSTS } from '../actions/constants';

const posts = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_MEDIA:
      return action.data;
    case APPEND_POSTS:
      return [...posts, action.data];
    default:
      return state;
  }
};

export default posts;
