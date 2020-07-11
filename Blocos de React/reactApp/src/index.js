import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// O BrowserRouter serve para permitir o roteamento entre os componentes React.
// Tanto faz colocar aqui ou direto no App.js o Router. Aqui deixará mais clean, no caso
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
