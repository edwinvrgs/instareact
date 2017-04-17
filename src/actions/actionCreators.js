import { SET_TOKEN_ACCESS, UPDATE_SEARCH_RESULTS, UPDATE_PROFILE, UPDATE_MEDIA, APPEND_POSTS, FETCHING_DATA, PROFILE, SEARCH, MEDIA } from './constants';

import fetchJsonp from 'fetch-jsonp';

//Add access token
export const setTokenAccess = (token) => {
  return {
    type: SET_TOKEN_ACCESS,
    token
  }
}

//Update de search results
export const updateSearchResults = (results) => {
  return {
    type: UPDATE_SEARCH_RESULTS,
    results
  }
}

//Update the actual profile
export const updateProfile = (data, media) => {
  return {
    type: UPDATE_PROFILE,
    data,
  }
}

//Update the posts from actual profile
export const updateMedia = (data) => {
  return {
    type: UPDATE_MEDIA,
    data,
  }
}

//Add more posts
export const appendPosts = (data) => {
  return {
    type: APPEND_POSTS,
    data
  }
}

//Tells me if data it's fetching
export const fetchingData = () => {
  return {
    type: FETCHING_DATA,
  }
}

//Fetch the data [url: the endpoint - type: the type of data to fetch - append: if data is posts, this tells me if append or not]
export function fetchData(url, type, append = false) {

  return (dispatch) => {
    dispatch(fetchingData());

    fetchJsonp(url)
      .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }

        dispatch(fetchingData());
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        switch (type) {
          case SEARCH:
            dispatch(updateSearchResults(data));
            break;
          case PROFILE:
            dispatch(updateProfile(data));
            break;
          case MEDIA:
            if(!append)
              dispatch(updateMedia(data));
            else
              dispatch(appendPosts(data));
            break;
          default:
            return {};
        }
      })
      .catch((error) => console.error(error));
  };
}
