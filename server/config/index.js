import { config } from 'dotenv'

config()

const app = {
    PORT: process.env.PORT || 4000,
    URL_FRONT: process.env.URL_FRONT || 'http://localhost',
    STRIPE_PRIVATE_KEY: process.env.STRIPE_PRIVATE_KEY
};

export default app;