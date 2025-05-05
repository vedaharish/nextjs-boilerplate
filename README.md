This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Pokedex App – Full Stack Project

This is a full-stack Pokémon Pokedex app built using **Next.js**, **TypeScript**, **Prisma**, **tRPC**, **React Query**, and **Material UI**.  
The app allows you to search for a single Pokémon, a list of Pokémon, or filter them by type.

---

## Features

### Part 1 – Get Single Pokémon
- Search for a Pokémon by name.
- View its ID, type(s), and sprite.
- Component: `<PokemonRow />`

### Part 2 – Get Multiple Pokémon
- Enter comma-separated Pokémon names.
- View all Pokémon in a table.
- Component: `<PokedexTable />`

### Part 3 – Filter Pokémon by Type
- Select a type from a dropdown.
- View filtered Pokémon.
- Component: `<FilterablePokedexTable />` with `<PokemonTypeSelection />`

---

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/)
- **Backend**: [tRPC](https://trpc.io/), [React Query](https://tanstack.com/query)
- **Database**: [Prisma ORM](https://www.prisma.io/) + SQL (PlanetScale or local)
- **UI**: [Material UI](https://mui.com/)

---

## Project Structure
src/
pages/
api/trpc/[trpc].ts # tRPC handler
part1.tsx # Route for Part 1
part2.tsx # Route for Part 2
part3.tsx # Route for Part 3
components/
PokemonRow.tsx
PokedexTable.tsx
PokemonTypeSelection.tsx
FilterablePokedexTable.tsx
server/
db/
prisma.ts # Prisma client
trpc/
routers/
pokemon.ts # Pokémon-related routes
index.ts # App router
prisma/
schema.prisma # DB schema
seed.ts # Sample Pokémon data

## Getting Started

### 1. Clone Repo
git clone https://github.com/YOUR_USERNAME/pokedex-app
cd pokedex-app

### 2. Install Dependencies
npm install

### 3. Set Up Environment
Create a .env file:
DATABASE_URL="mysql://username:password@host:port/dbname"
Or use PlanetScale and copy the connection string.

### 4. Set Up Database
npx prisma db push
npx tsx prisma/seed.ts

### 5. Run the App
npm run dev
Go to http://localhost:3000/part1 for Part 1, /part2, and /part3 respectively.

### Deployment
Vercel (Frontend)
Push your code to a public GitHub repo.

Go to vercel.com and import the project.

Set the DATABASE_URL in Vercel Environment Variables.

PlanetScale (Database)
Create a database on planetscale.com.

Connect using Prisma and push the schema.

### Bonus Highlights
- Pagination and Caching with React Query
- Fully responsive using Material UI
- Typed API end-to-end with tRPC
- Modular, reusable components

