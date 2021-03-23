import {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  const [isFront, setIsFront] = useState(true)


  return (
    <Card>
      <div>
        <div className="image" onClick={e => setIsFront(!isFront)}>
          <img  src={isFront ? pokemon.sprites.front : pokemon.sprites.back} alt={pokemon.name} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
