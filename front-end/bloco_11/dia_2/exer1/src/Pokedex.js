import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css'

class Pokedex extends React.Component {

  render() {    
    
    const pokemonList = this.props.data;
    return (
      <div className='pokedex'>
        <div className='pokedex-title'>
          <p>POKEDEX</p>
        </div>
        <div className='pokedex-pokemon-container'>
          {pokemonList.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
        </div>
      </div>
    );
  }
}

export default Pokedex;
