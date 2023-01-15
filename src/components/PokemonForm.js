import React, { useState }from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ handleNewPoke }) {
  //form information
  const [formName, setFormName] = useState('')
  const [formHP, setFormHP] = useState(10)
  const [formImageFront, setFormImageFront] = useState('')
  const [formImageBack, setFormImageBack] = useState('')

  const handleFormName = (e) => {
    setFormName(e.target.value)
  }
  const handleFormHP = (e) => {
    setFormHP(e.target.value)
  }
  const handleFormImageFront = (e) => {
    setFormImageFront(e.target.value)
  }
  const handleFormImageBack = (e) => {
    setFormImageBack(e.target.value)
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let newPoke = {
      name: formName,
      hp: formHP,
      sprites: {
        front: formImageFront,
        back: formImageBack
      }
    }

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPoke)
    })
    .then(r => r.json())
    .then(newPokemon => handleNewPoke(newPokemon))
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => { handleFormSubmit(e) }}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={formName}
            onChange={handleFormName}
            />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={formHP}
            onChange={handleFormHP}
            />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formImageFront}
            onChange={handleFormImageFront}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formImageBack}
            onChange={handleFormImageBack}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
