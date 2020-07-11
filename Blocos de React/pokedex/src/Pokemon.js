import React from 'react'
import PokemonDetails from "./PokemonDetails";
import { Link, Route } from "react-router-dom";

class Pokemon extends React.Component {
    render() {
        const { id, name, type, averageWeight: {value, measurementUnit}, image} = this.props.pokemon;

        return (
            <div className="pokemon">
                <Route 
                    path='/pokemons/:id' 
                    render={(props) => <PokemonDetails {...props} pokemon={this.props.pokemon}/>}
                />
                <div className="pic">
                    <img src={image} alt='Pokemon no. 1'></img>
                </div>
                <div className="info">
                    <h2>#{id}: {name}</h2>
                    <h3><strong>Type: </strong>{type}</h3>
                    <h3><strong>Weight: </strong>{value} {measurementUnit}</h3>
                    <Link to={`/pokemons/${id}`}>More info</Link>

                </div>
            </div>
        );
    }
}

export default Pokemon;