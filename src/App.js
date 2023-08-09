import React from "react";
import './App.css';
import { toRomaji } from 'wanakana';

const PokemonRow = ({pokemon, onSelect}) => (
  <tr>
    <td>{pokemon.name.japanese}</td>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td><button onClick={() => onSelect(pokemon)}>Select!</button></td>
  </tr>
)

const PokemonInfo = ({name, base}) => (
  <div>
    <h1>{name.japanese}</h1>
    <h2>{name.english}</h2>
    <table>
      {
        Object.keys(base).map(key =>
          (<tr key={key}>
            <td>{key}</td>
            <td>{base[key]}</td>
          </tr>)
        )
      }
    </table>
  </div>
)

function App() {

  const [filter, filterSet] = React.useState("");
  const [selectedItem, selectedItemSet] = React.useState(null);
  const [pokemon, pokemonSet] = React.useState([]);

  React.useEffect(() => {
    fetch("https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json")
    .then((response) => response.json())
    .then((data) => pokemonSet(data))
  }, []);
  
  return (
    <div style={{
      margin: "auto",
      width: 800,
      paddingTop: "1rem",
    }}>
      <h1 className="title">Pokemon Search</h1>
      <div
        style = {{
          display: "grid",
          gridTemplateColumns: "70% 30%",
          gridColumnGap: "1rem"
        }}
      >
        <div>
          <input
            value={filter}
            onChange={(e) => filterSet(e.target.value)}
          />
          <table width="100%">
            <thead>
              <tr>
                <th>Japanese</th>
                <th>English</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {
                filter.match(/\w/ig) ? 
                pokemon.filter((pokemon) =>
                pokemon.name.english.toLowerCase()
                .includes(filter.toLowerCase()))
                .slice(0, 200)
                .map(pokemon => (
                  <PokemonRow pokemon={pokemon} key={pokemon.id}
                    onSelect={(pokemon) => selectedItemSet(pokemon)} />
                )) :
                pokemon.filter((pokemon) =>
                toRomaji(pokemon.name.japanese)
                .includes(toRomaji(filter)))
                .slice(0, 200)
                .map(pokemon => (
                  <PokemonRow pokemon={pokemon} key={pokemon.id}
                    onSelect={(pokemon) => selectedItemSet(pokemon)} />
                ))
              }
            </tbody>
          </table>
        </div>
        <div>
          {selectedItem && (
            <PokemonInfo {... selectedItem} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;