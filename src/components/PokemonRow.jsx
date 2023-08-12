import React from "react";

const PokemonRow = ({pokemon, onSelect}) => (
  <tr>
    <td>{pokemon.name.japanese}</td>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td><button style={{width: 50}} onClick={() => onSelect(pokemon)}>+</button></td>
  </tr>
)

export default PokemonRow;