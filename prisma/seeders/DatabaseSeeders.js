
import { PrismaClient } from '@prisma/client';
import RoleSeeder from './RoleSeeder.js';

const prisma = new PrismaClient();

async function main() {
  await RoleSeeder(prisma);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
