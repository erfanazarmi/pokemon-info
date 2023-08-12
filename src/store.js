import { create } from 'zustand'

const useStore = create((set) => ({
  pokemon: [],
  filter: "",
  selectedPokemon: null,
  setPokemon: (pokemon) => set((state) => ({ ... state, pokemon })),
  setFilter: (filter) => set((state) => ({ ... state, filter })),
  setSelectedPokemon: (selectedPokemon) => set((state) => ({ ... state, selectedPokemon })),
}))

fetch("https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json")
.then((response) => response.json())
.then(pokemon => useStore.setState(state => ({... state, pokemon})));

export default useStore;