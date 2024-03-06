import { config } from 'dotenv'

config()

const app = {
    PORT: process.env.PORT || 4000,
    STRIPE_PRIVATE_KEY: process.env.STRIPE_PRIVATE_KEY
};

export default app;