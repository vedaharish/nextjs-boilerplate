// src/server/api/routers/pokemon.ts
import { z } from 'zod';
import { publicProcedure, router } from '@/server/api/trpc';

export const pokemonRouter = router({
  getByName: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      try {
        const pokemonData = {
          id: 1,
          name: input,
          types: ['grass', 'poison'],
          sprite: `https://img.pokemondb.net/sprites/home/normal/${input.toLowerCase()}.png`, // Example sprite URL
        };
        
        return pokemonData;
      } catch (error) {
        console.error('Error fetching Pokémon by name:', error);
        throw new Error('Failed to fetch Pokémon by name');
      }
    }),

  getByType: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      try {
        const pokemons = [
          { id: 1, name: 'bulbasaur', types: ['grass', 'poison'], sprite: 'https://img.pokemondb.net/sprites/home/normal/bulbasaur.png' },
          { id: 2, name: 'ivysaur', types: ['grass', 'poison'], sprite: 'https://img.pokemondb.net/sprites/home/normal/ivysaur.png' },
        ];

        const filteredPokemons = pokemons.filter((pokemon) => pokemon.types.includes(input));

        return filteredPokemons;
      } catch (error) {
        console.error('Error fetching Pokémon by type:', error);
        throw new Error('Failed to fetch Pokémon data by type');
      }
    }),

  getMany: publicProcedure
    .input(z.array(z.string()))
    .query(async ({ input }) => {
      try {
        const allPokemons = [
          { id: 1, name: 'bulbasaur', types: ['grass', 'poison'], sprite: 'https://img.pokemondb.net/sprites/home/normal/bulbasaur.png' },
          { id: 2, name: 'ivysaur', types: ['grass', 'poison'], sprite: 'https://img.pokemondb.net/sprites/home/normal/ivysaur.png' },
          { id: 3, name: 'venusaur', types: ['grass', 'poison'], sprite: 'https://img.pokemondb.net/sprites/home/normal/venusaur.png' },
        ];
        return allPokemons.filter((pokemon) => input.includes(pokemon.name));
      } catch (error) {
        console.error('Error fetching multiple Pokémon:', error);
        throw new Error('Failed to fetch Pokémon data');
      }
    }),
});


