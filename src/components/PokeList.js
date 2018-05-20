import React from 'react';
import PokeCell from './PokeCell';
import { PokeClasses } from '../PokeClasses';
import './styles/PokeList.css';

const PokeList = () => {
    const cells = pokeClasses.map(pokeClass => <PokeCell pokeClass={pokeClass} />)
  return (
    <section className="poke-list">
        <PokeCell />
        <PokeCell />
        <PokeCell />
    </section>
  )
}


export default PokeList;