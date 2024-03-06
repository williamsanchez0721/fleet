import express from 'express'
import paymentRoutes from './routes/api.js'
import { PORT } from './config/index.js'

const app = express();

app.use(express.json())

app.use(paymentRoutes)

app.listen(PORT)

console.log('Server on port', PORT)