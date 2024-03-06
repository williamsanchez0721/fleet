import Stripe from 'stripe';

const stripe = new Stripe(
    'sk_test_51OqzuTGIi2qOmAI9uzXR3cxAnhM0G4XZA9rzrnoXMCU0B9jTK16lMdeaLyMVu3dDvF0qIngJSsv9OfW3Bhf0c3BJ00TOInih12');

export const createSession = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    product_data: {
                        name: 'Laptop',
                        description: 'Gaming Laptop',
                    },
                    currency: 'usd',
                    unit_amount: 20000, // equivalente a 200 dolares, tiene que pasarse en centavos
                },
                quantity: 1
            },
            {
                price_data: {
                    product_data: {
                        name: 'TV',
                        description: 'Smart TV',
                    },
                    currency: 'usd',
                    unit_amount: 10000, // equivalente a 100 dolares, tiene que pasarse en centavos
                },
                quantity: 3
            }
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    })

    return res.json(session)
};