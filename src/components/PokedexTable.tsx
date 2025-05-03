import PokemonRow from './PokemonRow';

type Pokemon = {
  id: number;
  name: string;
  types: string[];
  sprite: string;
};

type PokedexTableProps = {
  pokemons: Pokemon[];
};

export const PokedexTable = ({ pokemons }: PokedexTableProps) => {
  return (
    <>
      {pokemons?.map(pokemon => (
        <PokemonRow key={pokemon.id} pokemon={pokemon} />
      ))}
    </>
  );
};
