async function SubscriptionSeeder(prisma) {
    await prisma.subscription.createMany({
        data: [
            {
                shippingAddress: 'Dirección de envío 1',
                paymentResult: 'Resultado del pago 1',
                isPaid: true,
                paidAt: '2022-01-01T00:00:00Z',
                transactionId: 'ID de transacción 1',
                city: 'Ciudad 1',
                country: 'País 1',
                clienteId: 1,
            },
            {
                shippingAddress: 'Dirección de envío 2',
                paymentResult: 'Resultado del pago 2',
                isPaid: true,
                paidAt: '2022-01-02T00:00:00Z',
                transactionId: 'ID de transacción 2',
                city: 'Ciudad 2',
                country: 'País 2',
                clienteId: 2,
            },
        ],
    });
}

export default SubscriptionSeeder;
