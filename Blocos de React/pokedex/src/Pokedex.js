import React from 'react'
import pokemons from './data'
import Pokemon from './Pokemon'

// Exercício do bloco 12.2
class PokedexV12 extends React.Component {
    render() {
        return (
            <div className='pokeGrid'>
            { pokemons.map(pokemon => <Pokemon pokemon={pokemon}/>) }
            </div>
        );
    }
}

// Exercício do bloco 13.1
class PokedexV13 extends React.Component {

    constructor() {
        super()
        this.state = {
            displayPokemon: 0,
            filtro: ''
        };
    }

    navigate(ind, max) {
        ind < max - 1 ? ind++ : ind = 0;
        this.setState({ displayPokemon: ind })
    };

    filtraPokemons = () => {
        if (this.state.filtro === '') return pokemons;
        return pokemons.filter(pokemon => pokemon.type === this.state.filtro);
    }


    render() {
        const filtro = this.filtraPokemons();
        return (
            <div className='pokeDetail'>
            <Pokemon pokemon = {filtro[this.state.displayPokemon]} />
            <button onClick={ () => this.navigate(this.state.displayPokemon, filtro.length) }>Próximo</button>
            <button onClick={ () => this.setState({ filtro: 'Fire' }) }>Fire</button>
            <button onClick={ () => this.setState({ filtro: 'Psychic' }) }>Psychic</button>
            <button onClick={ () => this.setState({ filtro: '' }) }>All</button>

            </div>
        );
    }
}

export default PokedexV13;