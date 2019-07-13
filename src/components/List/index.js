import React from "react";
import "./index.css";
// 数据来自 https://cn.portal-pokemon.com/play/pokedex
import PokemonList from "../../data/pokemon.json";
import { pokemonTypesCN } from "../../data/configs";
import Section from "../Section";

export default class List extends React.Component {
  render() {
    return (
      <div className="section-list">
        {SectionList.map(section => (
          <Section key={section.key} name={section.key} list={section.list} />
        ))}
      </div>
    );
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
