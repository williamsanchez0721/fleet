async function ProductSeeder(prisma) {
  await prisma.product.createMany({
    data: [
      {
        name: 'Product 1',
        price: 50.00,
        currency: 'USD',
        brochure: 'https://example.com/product1-brochure.pdf',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: false,
      },
      {
        name: 'Product 2',
        price: 75.00,
        currency: 'USD',
        brochure: 'https://example.com/product2-brochure.pdf',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: false,
      },
      // Puedes agregar más productos aquí según sea necesario
    ],
  });
}

export default ProductSeeder;
