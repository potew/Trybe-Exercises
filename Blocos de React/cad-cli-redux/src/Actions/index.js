export const ADD_CLIENT = 'ADD_CLIENT';
export const DELETE_CLIENT = 'DELETE_CLIENT';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const REQUEST_API = 'REQUEST_API';
export const PROCESS_API_DATA = 'PROCESS_API_DATA';
export const PROCESS_ERROR = 'PROCESS_ERROR';

// Esta é uma action que será consumida pelo reducer clientReducer
export const addClient = (clientInfo) => ({
  type: ADD_CLIENT,
  client: clientInfo
  }
);

export const deleteClient = (value) => ({
  type: DELETE_CLIENT,
  value
  }
);

// Esta é outra, e será consumida pelo reducer userLogin
export const userValidated = (user) => (
  {
    type: USER_AUTHENTICATED,
    user
  }
);

// Estas serão consumidas pelo reducer APISearchReducer
export const performSearch = (query) => (
  {
    type: REQUEST_API,
    query
  }
);

// Estas serão consumidas pelo reducer APISearchReducer
export const receiveData = (data) => (
  {
    type: PROCESS_API_DATA,
    results: data.results,
    resultCount: data.resultCount
  }
);

export const fetchError = (error) => (
  {
    type: PROCESS_ERROR,
    payload: { error }
  }
);

// Action creator que retorna uma função, possível por conta do pacote redux-thunk
export const fetchItunesItems = (term, entity) => {
  return function(dispatch) { // Esta é a thunk
    dispatch(performSearch());
    return fetch(`https://itunes.apple.com/search?term=${term}&entity=${entity}`)
      .then(handlErrors)
      .then((response) => response.json())
      .then(
        (data) => dispatch(receiveData(data)),
        (error) => dispatch(fetchError(error)));
      // Depois de tudo, envio a ação (com o objeto)
      // para o reducer (com os dados baixados)
  };
}

function handlErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
