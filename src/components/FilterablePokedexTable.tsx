import { useState } from "react";
import { api } from "@/utils/api";

export const FilterablePokedexTable = () => {
  const [type, setType] = useState<string | undefined>(undefined);
  const { data: pokemons, isLoading } = api.pokemon.getByType.useQuery(type ?? "", {
    enabled: !!type,
  });

  if (isLoading) return <div>Loading...</div>;
  if (!pokemons || pokemons.length === 0) return <div>No Pokémon found.</div>;

  return (
    <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon.name}>
          <h3>{pokemon.name}</h3>
          <p>Type: {pokemon.types.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};
