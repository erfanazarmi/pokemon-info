import React from "react";
import useStore from "../store";
import { toRomaji } from 'wanakana';

import PokemonRow from "./PokemonRow";


const PokemonTable = () => {
  
  const pokemon = useStore(state => state.pokemon);
  const filter = useStore(state => state.filter);
  const setSelectedPokemon = useStore(state => state.setSelectedPokemon);

  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Japanese</th>
          <th>English</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody> {
        filter.match(/\w/ig) ?
          pokemon.filter((pokemon) =>
            pokemon.name.english.toLowerCase()
            .includes(filter.toLowerCase()))
            .slice(0, 200)
            .map(pokemon => (
              <PokemonRow pokemon={pokemon} key={pokemon.id}
              onSelect={(pokemon) => setSelectedPokemon(pokemon)} />
            )) :
          pokemon.filter((pokemon) =>
            toRomaji(pokemon.name.japanese)
            .includes(toRomaji(filter)))
            .slice(0, 200)
            .map(pokemon => (
              <PokemonRow pokemon={pokemon} key={pokemon.id}
              onSelect={(pokemon) => setSelectedPokemon(pokemon)} />
            ))
        }
      </tbody>
    </table>
  )
}

export default PokemonTable;