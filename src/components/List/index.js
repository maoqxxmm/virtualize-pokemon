import React from "react";
import "./index.css";
// 数据来自 https://cn.portal-pokemon.com/play/pokedex
import PokemonList from "../../data/pokemon.json";
import { pokemonTypesCN } from "../../data/configs";
import Section from "../Section";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionList: SectionList
    };
    this.onToggleSection = this.onToggleSection.bind(this);
  }

  render() {
    return (
      <div className="section-list">
        {this.state.sectionList.map(section => (
          <Section
            key={section.name}
            section={section}
            onToggleSection={this.onToggleSection}
          />
        ))}
      </div>
    );
  }

  onToggleSection(name) {
    this.setState({
      sectionList: this.state.sectionList.map(section => {
        if (section.name === name) {
          return Object.assign({}, section, {
            collapse: !section.collapse
          });
        } else {
          return section;
        }
      })
    });
  }
}

const SectionList = pokemonTypesCN.map((type, index) => {
  return {
    name: type,
    list: PokemonList.filter(pokemon => {
      const { pokemon_type_name } = pokemon;
      return pokemon_type_name.match(type);
    }),
    collapse: false
  };
});
