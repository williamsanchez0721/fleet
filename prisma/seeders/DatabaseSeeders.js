
import { PrismaClient } from '@prisma/client';
import RoleSeeder from './RoleSeeder.js';
import UserSeeder from './UserSeeder.js';
import SubscriptionSeeder from './SubscriptionSeeder.js';
import ProductSeeder from './ProductSeeder.js';

const prisma = new PrismaClient();

async function main() {
  await RoleSeeder(prisma);
  await UserSeeder(prisma);
  await SubscriptionSeeder(prisma);
  await ProductSeeder(prisma);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    console.log("Seeders executed successfully.");
    await prisma.$disconnect();
  });
