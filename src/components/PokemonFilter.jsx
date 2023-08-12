import React from "react";
import { useSelector, useDispatch } from "react-redux";

const PokemonFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => dispatch({type: "SET_FILTER", payload: e.target.value})}
    />
  )
}

export default PokemonFilter;