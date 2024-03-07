import Stripe from 'stripe';
import config from '../../../config/index.js'
import { success, error } from '../Responses/response.js'

const stripe = new Stripe(config.STRIPE_PRIVATE_KEY);

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
        success_url: `${config.URL_FRONT}:${config.PORT}/success`,
        success_url: `${config.URL_FRONT}:${config.PORT}/cancel`,
    })

    return res.json(session)
};

export const getResponse = (req, res) => {
    return success(req, res, "Todo correcto", 200)
}