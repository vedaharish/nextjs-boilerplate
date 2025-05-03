import { useState } from "react";
import { api } from "@/utils/api";
import { FilterablePokedexTable } from "@/components/FilterablePokedexTable";
import { Container, Typography } from "@mui/material";

export default function FilterPage() {
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);

  const { data: filteredPokemon, error } = api.pokemon.getByType.useQuery(selectedType ?? "", {
    enabled: !!selectedType,
  });

  if (error) {
    console.error('Error fetching Pokémon by type:', error);
    return <div>Error occurred while fetching Pokémon.</div>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Filter by Type</Typography>
      <FilterablePokedexTable
        selectedType={selectedType}
        selectType={setSelectedType}
        pokemon={filteredPokemon ?? []}
      />
    </Container>
  );
}
