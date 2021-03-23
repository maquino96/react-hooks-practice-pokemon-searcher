import {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState('')
  console.log(search)

  useEffect( () => {

    fetch(`http://localhost:3001/pokemon`)
      .then(r => r.json())
      .then( data => setPokemon(data))

  }, [])

const displayPokemon = pokemon.filter( pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))

const handleNewPokemon = (newPokemon) => {
  const pokemonArr = [...pokemon, newPokemon]
  setPokemon(pokemonArr)
}


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleNewPokemon={handleNewPokemon}/>
      <br />
      <Search search={search} onSearch={setSearch}/>
      <br />
      <PokemonCollection pokemon={displayPokemon}/>
    </Container>
  );
}

export default PokemonPage;
