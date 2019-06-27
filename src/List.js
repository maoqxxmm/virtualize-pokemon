import React from "react";
import "./List.css";
// 数据来自 https://cn.portal-pokemon.com/play/pokedex
import PokemonList from "./data/pokemon.json";
import { pokemonTypeColorMap, pokemonTypesCN } from "./data/configs";

export default class List extends React.Component {
  render() {
    return (
      <div className="section-list">
        {SectionList.map(section => (
          <section key={section.key}>
            <div className="section-header">{section.key}</div>
            <ul className="list">
              {section.list.map(pokemon => this.renderPokemon(pokemon))}
            </ul>
          </section>
        ))}
      </div>
    );
  }

  renderPokemon(pokemon) {
    const id = this.getPokemonId(pokemon);
    const name = this.getPokemonName(pokemon);
    const imgUrl = process.env.PUBLIC_URL + pokemon.file_name;
    const type = this.renderPokemonType(pokemon);
    return (
      <div key={id} className="pokemon">
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

  getPokemonId(pokemon) {
    return `${pokemon.zukan_id}-${pokemon.zukan_sub_id}`;
  }

  getPokemonName(pokemon) {
    const name = pokemon.pokemon_name;
    const subName = pokemon.pokemon_sub_name;
    return subName ? `${name} - ${subName}` : name;
  }
}

const SectionList = pokemonTypesCN.map((type, index) => {
  return {
    key: type,
    list: PokemonList.filter(pokemon => {
      const { pokemon_type_name } = pokemon;
      return pokemon_type_name.match(type);
    }),
    collpase: false
  };
});
