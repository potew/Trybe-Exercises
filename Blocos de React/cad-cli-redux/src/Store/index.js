import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
// Thunk nada mais é do que uma função que encapsula uma operação para que ela seja feita posteriormente. Em termos práticos, isso significa que você está definindo uma função que vai ser retornada por uma outra função com mais lógica adicionada a ela.

import loginReducer from "../Reducers/userLogin";
import clientReducer from "../Reducers/addClient";
import APISearchReducer from "../Reducers/APISearch";

const store = createStore(
  combineReducers({ loginReducer, clientReducer, APISearchReducer }),
  applyMiddleware(thunk),
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;