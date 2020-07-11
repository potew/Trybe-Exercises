import React from 'react';
import './App.css';
import About from "./About";
import Header from './Header';
import PokedexV13 from './Pokedex';
//import PokemonDetails from './PokemonDetails';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/home' component={PokedexV13}></Route>
        <Route path='/about' component={About}></Route>
      </Switch>
    </div>
  );
}

export default App;