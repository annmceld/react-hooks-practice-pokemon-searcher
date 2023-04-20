import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  const [spriteIsFront, setSpriteIsFront] = useState(true)

  function toggleSprite () {
    setSpriteIsFront(!spriteIsFront)
  }

  const {id, name, hp, sprites} = pokemon
  const {front, back} = sprites

  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={toggleSprite} 
          src={spriteIsFront ? front : back} 
          alt="oh no!" 
          />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
