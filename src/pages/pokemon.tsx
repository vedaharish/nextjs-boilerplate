import { useState } from "react";
import { api } from "@/utils/api";
import PokemonRow from "@/components/PokemonRow";

export default function PokemonPage() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const { data: pokemon, isLoading, error } = api.pokemon.getByName.useQuery(submittedName, {
    enabled: !!submittedName,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log('Fetched Pokemon:', pokemon);
  return (
    <div>
      <h1>Get Pokemon</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Pokemon name"
      />
      <button onClick={() => setSubmittedName(name)}>Fetch</button>

      {}
      {pokemon ? <PokemonRow pokemon={pokemon} /> : <p>No data yet</p>}
    </div>
  );
}
