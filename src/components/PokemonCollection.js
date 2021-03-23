import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {

  const cardComponents = pokemon.map( pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)

  return (
    <Card.Group itemsPerRow={6}>
      {cardComponents}
    </Card.Group>
  );
}

export default PokemonCollection;
