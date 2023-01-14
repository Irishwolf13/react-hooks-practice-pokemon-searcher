import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ data, searchInput }) {
  //We will need to filter before displaying
  const filteredData = data.filter(item => item.name.includes(searchInput)) //Will need to add criteria with searchInput
  
  // This will be what we want to do with filtered data
  const displayPokemon = filteredData.map(poke => (
    <PokemonCard
      key={poke.id} 
      poke={poke}
    />
  ))
  
  return (
    <Card.Group itemsPerRow={6}>  
      {displayPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
