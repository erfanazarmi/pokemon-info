import React, { useContext } from "react";
import PokemonContext from "../PokemonContext";

const PokemonFilter = () => {
  const {filter, filterSet} = useContext(PokemonContext);
  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => filterSet(e.target.value)}
    />
  )
}

export default PokemonFilter;