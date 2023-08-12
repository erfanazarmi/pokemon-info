import React from "react";
import "./App.css";

import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

function App() {
  return (
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
  );
}

export default App;
