import { useState } from "react";
import { api } from "@/utils/api";
import { Pokemon } from "@/types/pokemon";
import PokemonRow from "@/components/PokemonRow";

export default function PokemonPage() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const { data: pokemon } = api.pokemon.getByName.useQuery(submittedName, {
    enabled: !!submittedName,
  });

  return (
    <div>
      <h1>Get Pokemon</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Pokemon name"
      />
      <button onClick={() => setSubmittedName(name)}>Fetch</button>

      {pokemon ? <PokemonRow pokemon={pokemon} /> : <p>No data yet</p>}
    </div>
  );
}
