import React from "react";
import { toRomaji } from 'wanakana';
import PokemonRow from "./PokemonRow";
import { useSelector, useDispatch } from "react-redux";

const PokemonTable = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.pokemon);
  const filter = useSelector(state => state.filter);

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
              onSelect={(pokemon) => dispatch({type: "SET_SELECTEDPOKEMON", payload: pokemon})} />
            )) :
          pokemon.filter((pokemon) =>
            toRomaji(pokemon.name.japanese)
            .includes(toRomaji(filter)))
            .slice(0, 200)
            .map(pokemon => (
              <PokemonRow pokemon={pokemon} key={pokemon.id}
              onSelect={(pokemon) => dispatch({type: "SET_SELECTEDPOKEMON", payload: pokemon})} />
            ))
        }
      </tbody>
    </table>
  )
}

export default PokemonTable;