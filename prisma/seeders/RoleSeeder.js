async function RoleSeeder(prisma) {
    await prisma.role.createMany({
        data: [
            { name: 'Admin', deletedAt: false },
            { name: 'User', deletedAt: false },
        ],
    });
}

export default RoleSeeder;
