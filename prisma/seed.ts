import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const grassType = await prisma.type.create({
    data: { name: 'grass' },
  })

  const bulbasaur = await prisma.pokemon.create({
    data: {
      name: 'Bulbasaur',
      sprite: 'https://pokemon.com/pictures/bulbasaur.png',
      types: {
        connect: { id: grassType.id },
      },
    },
  })

  console.log({ bulbasaur })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
