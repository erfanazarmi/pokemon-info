import React, { useContext } from "react";
import PokemonContext from "../PokemonContext";

const PokemonFilter = () => {
  const {state: {filter}, dispatch} = useContext(PokemonContext);
  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => dispatch({type: "SET_FILTER", payload: e.target.value})}
    />
  )
}

export default PokemonFilter;