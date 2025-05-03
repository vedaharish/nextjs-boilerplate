import { Select, MenuItem } from '@mui/material';

type Props = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
};

export const PokemonTypeSelection = ({ selectedType, selectType }: Props) => {
  const types = ['grass', 'fire', 'water', 'electric', 'poison']; // Add more as needed

  return (
    <Select value={selectedType || ''} onChange={(e) => selectType(e.target.value || undefined)}>
      <MenuItem value="">All</MenuItem>
      {types?.map(type => (
        <MenuItem key={type} value={type}>
          {type}
        </MenuItem>
      ))}
    </Select>
  );
};
