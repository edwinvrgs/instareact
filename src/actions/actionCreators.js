//Agrega el token de acceso
export const setTokenAcess = () => {
  return {
    type: 'SET_TOKEN_ACCESS',
  }
}

//Actualiza los resultados de la busqueda
export const updateSearchResults = () => {
  return {
    type: 'UPDATE_SEARCH_RESULTS'
  }
}

//Establece el perfil actual
export const updateProfile = () => {
  return {
    type: 'UPDATE_PROFILE'
  }
}

export const appendPosts = () => {
  return {
    type: 'APPEND_POSTS'
  }
}
