import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( { poke }) {
  const [isBackImage, setImage] = useState(false)
  const handleSprites = () => {
    setImage(prevState => !prevState)
  }
  
  return (
    <Card>
      <div onClick={handleSprites}>
        <div className="image">
          <img src={isBackImage ? poke.sprites.back : poke.sprites.front } alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{ poke.name }</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.hitPoints} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
