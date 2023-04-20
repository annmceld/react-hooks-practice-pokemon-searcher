import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const baseUrl = 'http://localhost:3001/'
const pokemonUrl = baseUrl + 'pokemon/'

function PokemonPage() {

  const [pokemons, setPokemons] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  

  useEffect(fetchPokemon, [])

  function fetchPokemon() {
    fetch(pokemonUrl)
    .then(r => r.json())
    .then(setPokemons)
  }

  const filteredPokemon = pokemons.filter (pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()))

function filterPokemonShown (event) {
  setSearchQuery(event.target.value)
}

function addNewPokemon (newPokemon) {

  const postRequest = {
    method: "POST",
    headers: {
      'content-type': 'application/json',
      'accepts': 'application/json'
    },
    body: JSON.stringify(newPokemon)
  }

  fetch(pokemonUrl, postRequest)
  .then(r => r.json())
  .then(newPokemonData => setPokemons([...pokemons, newPokemonData]))
}

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon}/>
      <br />
      <Search filterPokemonShown={filterPokemonShown} searchQuery={searchQuery}/>
      <br />
      <PokemonCollection pokemons={filteredPokemon} 
      />
    </Container>
  );
}

export default PokemonPage;
