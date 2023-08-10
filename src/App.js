import React from "react";
import './App.css';

import PokemonContext from "./PokemonContext";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

function App() {

  const [filter, filterSet] = React.useState("");
  const [selectedPokemon, selectedPokemonSet] = React.useState(null);
  const [pokemon, pokemonSet] = React.useState([]);

  React.useEffect(() => {
    fetch("https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json")
    .then((response) => response.json())
    .then((data) => pokemonSet(data))
  }, []);
  
  return (
    <PokemonContext.Provider
      value={{filter, pokemon, selectedPokemon,
      filterSet, pokemonSet, selectedPokemonSet}}
    >
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