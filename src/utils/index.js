export function getPokemonId(pokemon) {
  return `${pokemon.zukan_id}-${pokemon.zukan_sub_id}`;
}

export function getPokemonName(pokemon) {
  const name = pokemon.pokemon_name;
  const subName = pokemon.pokemon_sub_name;
  return subName ? `${name} - ${subName}` : name;
}
