async function PackageSeeder(prisma) {
    await prisma.package.createMany({
        data: [
            {
                name: 'Package 1',
                description: 'This is package 1 description.',
                price: 100.00,
                currency: 'USD',
                comments: 'Great package for beginners.',
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: false,
            },
            {
                name: 'Package 2',
                description: 'This is package 2 description.',
                price: 200.00,
                currency: 'USD',
                comments: 'Advanced package with additional features.',
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: false,
            },
        ],
    });
}

export default PackageSeeder;
