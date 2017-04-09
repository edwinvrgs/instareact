import { SET_TOKEN_ACCESS, UPDATE_SEARCH_RESULTS, UPDATE_PROFILE, UPDATE_MEDIA, APPEND_POSTS, FETCHING_DATA, PROFILE, SEARCH, MEDIA } from './constants';

import fetchJsonp from 'fetch-jsonp';

//Agrega el token de acceso
export const setTokenAccess = (token) => {
  return {
    type: SET_TOKEN_ACCESS,
    token
  }
}

//Actualiza los resultados de la busqueda
export const updateSearchResults = (results) => {
  return {
    type: UPDATE_SEARCH_RESULTS,
    results
  }
}

//Establece el perfil actual
export const updateProfile = (data, media) => {
  return {
    type: UPDATE_PROFILE,
    data,
  }
}

//Establece los posts recientes
export const updateMedia = (data) => {
  return {
    type: UPDATE_MEDIA,
    data,
  }
}

//Añade mas posts
export const appendPosts = (data) => {
  return {
    type: APPEND_POSTS,
    data
  }
}

//Me dice si estoy o no trayendo data
export const fetchingData = () => {
  return {
    type: FETCHING_DATA,
  }
}

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
      });
  };
}
