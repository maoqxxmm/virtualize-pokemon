import React from "react";
import Pokemon from "../Pokemon";
import { getPokemonId } from "../../utils";

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHeader = this.onClickHeader.bind(this);
  }

  render() {
    const { name, list, collapse } = this.props.section;
    return (
      <section>
        <div className="section-header" onClick={this.onClickHeader}>
          {name}
        </div>
        <ul className="list" style={{ height: collapse ? 0 : "auto" }}>
          {!collapse &&
            list.map(pokemon => (
              <Pokemon pokemon={pokemon} key={getPokemonId(pokemon)} />
            ))}
        </ul>
      </section>
    );
  }

  onClickHeader() {
    this.props.onToggleSection(this.props.section.name);
  }
}
