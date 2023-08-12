import React from "react";
import store from "../store";
import { observer } from "mobx-react";

const PokemonInfo = () => {
  return store.selectedPokemon ? (
    <div>
      <h1>{store.selectedPokemon.name.japanese}</h1>
      <h2>{store.selectedPokemon.name.english}</h2>
      <table>
        {Object.keys(store.selectedPokemon.base).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{store.selectedPokemon.base[key]}</td>
          </tr>
        ))}
      </table>
    </div>
  ) : null;
};

export default observer(PokemonInfo);
