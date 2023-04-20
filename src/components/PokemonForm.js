import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addNewPokemon}) {

  const [formName, setFormName] = useState("")
  const [formHp, setFormHp] = useState("")
  const [formImageFront, setFormImageFront] = useState("")
  const [formImageBack, setFormImageBack] = useState("")

  function changeFormName (event) {
    setFormName(event.target.value)
  }

  function changeFormHp (event) {
    setFormHp(event.target.value)
  }

  function changeFormImageFront (event) {
    setFormImageFront(event.target.value)
  }

  function changeFormImageBack (event) {
    setFormImageBack(event.target.value)
  }

  function submitPokemonForm () {
    const newPokemon = {
      name: formName,
      hp: formHp,
      sprites: {
        front: formImageFront,
        back: formImageBack
      }
    }

    addNewPokemon(newPokemon)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={submitPokemonForm}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formName} onChange={changeFormName}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formHp} onChange={changeFormHp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formImageFront}
            onChange={changeFormImageFront}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formImageBack}
            onChange={changeFormImageBack}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
