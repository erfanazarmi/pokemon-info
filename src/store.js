import { makeObservable, observable, computed } from "mobx";
import { toRomaji } from "wanakana";

class Store {
  pokemon = [];
  filter = "";
  selectedPokemon = null;

  constructor() {
    makeObservable(this, {
        pokemon: observable, filter: observable, selectedPokemon: observable,
        filteredPokemonEN: computed, filteredPokemonJP: computed
    });
  }

  get filteredPokemonEN() {
    return this.pokemon
    .filter((pokemon) =>
      pokemon.name.english
        .toLowerCase()
        .includes(this.filter.toLowerCase())
    )
  }

  get filteredPokemonJP() {
    return this.pokemon
    .filter((pokemon) =>
      toRomaji(pokemon.name.japanese).includes(toRomaji(store.filter))
    )
  }

  setPokemon(pokemon) {
    this.pokemon = pokemon;
  }
  setFilter(filter) {
    this.filter = filter;
  }
  setSelectedPokemon(selectedPokemon) {
    this.selectedPokemon = selectedPokemon;
  }
}

const store = new Store();

fetch(
  "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json"
)
  .then((response) => response.json())
  .then((pokemon) => store.setPokemon(pokemon));

export default store;
