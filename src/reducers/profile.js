import { UPDATE_PROFILE, APPEND_POSTS } from '../actions/constants';

const profile = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: {
          data: action.data,
          media: action.media
        }
      };
    case APPEND_POSTS:
      return {
        ...state,
        profile: {
          ...profile, media: [...profile.media, {media: action.media}]
        }
      };
    default:
      return state;
  }
};

export default profile;
