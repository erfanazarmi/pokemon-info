import React, { useContext } from "react";
import { toRomaji } from 'wanakana';
import PokemonRow from "./PokemonRow";
import PokemonContext from "../PokemonContext";

const PokemonTable = () => {
  const {pokemon, filter, selectedPokemonSet} = useContext(PokemonContext);
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
              onSelect={(pokemon) => selectedPokemonSet(pokemon)} />
            )) :
          pokemon.filter((pokemon) =>
            toRomaji(pokemon.name.japanese)
            .includes(toRomaji(filter)))
            .slice(0, 200)
            .map(pokemon => (
              <PokemonRow pokemon={pokemon} key={pokemon.id}
              onSelect={(pokemon) => selectedPokemonSet(pokemon)} />
            ))
        }
      </tbody>
    </table>
  )
}

export default PokemonTable;