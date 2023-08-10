import React from "react";
import './App.css';

import PokemonContext from "./PokemonContext";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

const pokemonReducer = (state, action) => {
  switch(action.type) {
    case 'SET_FILTER':
      return {
        ... state,
        filter: action.payload,
      };
    case 'SET_POKEMON':
      return {
        ... state,
        pokemon: action.payload,
      };
    case 'SET_SELECTEDPOKEMON':
      return {
        ... state,
        selectedPokemon: action.payload,
      };
    default:
      throw new Error("No action");
  }
}

function App() {

  const [state, dispatch] = React.useReducer(pokemonReducer, {
    pokemon: [], filter: "", selectedPokemon: null
  })

  React.useEffect(() => {
    fetch("https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json")
    .then((response) => response.json())
    .then((data) => dispatch({type:"SET_POKEMON" , payload: data}))
  }, []);

  if(!state.pokemon) {
    return <div>Loading data</div>
  }
  
  return (
    <PokemonContext.Provider value={{state, dispatch}}>
      <div className="page-container">
        <h1 className="title">Pokemon Search</h1>
        <div className="grid-container">
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          <div>
            <PokemonInfo />
          </div>
        </div>
      </div>
    </PokemonContext.Provider>
  );
}

export default App;