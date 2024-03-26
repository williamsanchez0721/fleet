async function UserSeeder(prisma) {
    await prisma.user.createMany({
        data: [
            {
                name: 'User Example',
                email: 'example@gmail.com',
                image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Male_Avatar.jpg',
                password: '$2b$05$TlVRbxYi9vUYlzXoqHg0mOJ8P/./5lYAQxjDjuqNVByQ.HImHdBGK',
                role_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: false,
            },
            {
                name: 'User Example 2',
                email: 'example2@gmail.com',
                image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Male_Avatar.jpg',
                password: '$2b$05$TlVRbxYi9vUYlzXoqHg0mOJ8P/./5lYAQxjDjuqNVByQ.HImHdBGK',
                role_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: false,
            },
        ],
    });
}

export default UserSeeder;
