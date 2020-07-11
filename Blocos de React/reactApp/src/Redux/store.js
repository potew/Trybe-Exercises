// Este arquivo com o store pode se chamar também index.js

import { createStore, combineReducers } from 'redux';
import { listReducer, formReducer } from './reducer';

const rootReducer = combineReducers({ listReducer, formReducer });

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

// Utilizamos também o método combineReducers que, como diz seu nome, combina reducers. Ele deve receber um objeto com os reducers criados. Sem ele, só poderíamos usar um reducer em nossa aplicação.