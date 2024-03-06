import express from 'express'
import paymentRoutes from 'api/routes/api.js'
import { PORT } from 'api/config/index.js'

const app = express();

app.use(express.json())

app.use(paymentRoutes)

app.listen(PORT)

console.log('Server on port', PORT)