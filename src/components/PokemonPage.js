import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const jsonURL = "http://localhost:3001/pokemon"
  const [data, setData] = useState([])
  const [searchInput, setSearchInput] = useState("")

  const handleUserInput = (e) => {
    setSearchInput(e.target.value) 
  }
  useEffect(() => {
    fetch(jsonURL)
    .then(response => response.json())
    .then(rawData => setData(rawData))
  },[])

  const handleNewPoke = (newPokemon) => {
    setData([...data, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleNewPoke={handleNewPoke}/>
      <br />
      <Search searchInput={ searchInput } handleUserInput={handleUserInput}/>
      <br />
      <PokemonCollection data={ data } searchInput={searchInput}/>
    </Container>
  );
}

export default PokemonPage;
