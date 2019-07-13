import React from "react";
import { pokemonTypeColorMap } from "../../data/configs";
import { getPokemonName } from "../../utils";

export default class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const name = getPokemonName(pokemon);
    const imgUrl = process.env.PUBLIC_URL + pokemon.file_name;
    const type = this.renderPokemonType(pokemon);
    return (
      <div className="pokemon">
        <img className="avatar" src={imgUrl} alt={name} />
        <span className="name">{name}</span>
        {type}
      </div>
    );
  }

  renderPokemonType(pokemon) {
    const ids = pokemon.pokemon_type_id.split(",");
    const types = pokemon.pokemon_type_name.split(",");
    return (
      <div className="types">
        {ids.map((id, index) => (
          <div
            key={id}
            className={`type type-${id}`}
            style={{
              backgroundColor: pokemonTypeColorMap[id],
              boxShadow: `0 0 0.25em 0.03em ${pokemonTypeColorMap[id]}`
            }}
          >
            {types[index]}
          </div>
        ))}
      </div>
    );
  }
}
