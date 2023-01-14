import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ data }) {
  
  const listOfPokemon = data.map(poke => (
    <PokemonCard
      key={poke.id} 
      poke={poke}
    />
  ))

  return (
    <Card.Group itemsPerRow={6}>  
      {listOfPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
