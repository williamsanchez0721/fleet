import express from 'express'
import routes from './routes/api.js'
import config from './config/index.js';

const app = express();

// Acepte Json
app.use(express.json())

// Rutas con prefijo api
app.use('/api', routes)

app.listen(config?.PORT)

console.log('Server on port', config?.PORT)