import React from "react";
import store from "../store";
import { observer } from "mobx-react";

import PokemonRow from "./PokemonRow";

const PokemonTable = () => {
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Japanese</th>
          <th>English</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {store.filter.match(/\w/gi)
          ? store.filteredPokemonEN
              .slice(0, 200)
              .map((pokemon) => (
                <PokemonRow
                  pokemon={pokemon}
                  key={pokemon.id}
                  onSelect={(pokemon) => store.setSelectedPokemon(pokemon)}
                />
              ))
          : store.filteredPokemonJP
              .slice(0, 200)
              .map((pokemon) => (
                <PokemonRow
                  pokemon={pokemon}
                  key={pokemon.id}
                  onSelect={(pokemon) => store.setSelectedPokemon(pokemon)}
                />
              ))
        }
      </tbody>
    </table>
  );
};

export default observer(PokemonTable);
