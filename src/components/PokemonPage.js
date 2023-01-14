import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const jsonURL = "http://localhost:3001/pokemon"
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch(jsonURL)
    .then(response => response.json())
    .then(rawData => setData(rawData))
  },[])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection data={ data }/>
    </Container>
  );
}

export default PokemonPage;
