import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

import PokedexV13 from './Pokedex';


function Header() {
  return (
    <div className="header">
      <Link to="/home">Home</Link>
      <Link to="/about">Sobre</Link>
    </div>
  );
}

export default Header;