import React from 'react';
import './App.css';

function PokemonDetails(pokemon) {
    const { id, name, type, averageWeight: {value, measurementUnit}, image, moreInfo } = pokemon;
  return (
    <div className="pokedetails">
        {console.log(id,name,type)};
    </div>
  );
}

export default PokemonDetails;
