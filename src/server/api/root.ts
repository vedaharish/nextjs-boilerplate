import { router } from '@/server/api/trpc';
import { pokemonRouter } from './routers/pokemon';

export const appRouter = router({
  pokemon: pokemonRouter,
});

export type AppRouter = typeof appRouter;
