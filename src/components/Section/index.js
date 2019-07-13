import React from "react";
import Pokemon from "../Pokemon";
import { getPokemonId } from "../../utils";

export default class Section extends React.Component {
  render() {
    const { name, list } = this.props;
    return (
      <section>
        <div className="section-header">{name}</div>
        <ul className="list">
          {list.map(pokemon => (
            <Pokemon pokemon={pokemon} key={getPokemonId(pokemon)} />
          ))}
        </ul>
      </section>
    );
  }
}
