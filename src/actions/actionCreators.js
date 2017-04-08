import { SET_TOKEN_ACCESS, UPDATE_SEARCH_RESULTS, UPDATE_PROFILE, APPEND_POSTS } from './constants';

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
    media
  }
}

//Añade mas posts
export const appendPosts = (posts) => {
  return {
    type: APPEND_POSTS,
    posts
  }
}
