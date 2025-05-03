import { Pokemon } from "@/types/pokemon";
import { FC } from "react";
type PokemonRowProps = {
  pokemon: Pokemon;
};

const PokemonRow: FC<PokemonRowProps> = ({ pokemon }) => {
  const types = pokemon?.types || [];

  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <img src={pokemon.sprite} alt={pokemon.name} width={50} />
      <div>{pokemon.id}</div>
      <div>{pokemon.name}</div>
      <div>{types.length > 0 ? types.join(", ") : "No types available"}</div>
    </div>
  );
};

export default PokemonRow;
