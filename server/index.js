import express from 'express'
import routes from './routes/api.js'
import config from './config/index.js';

const app = express();

app.use(express.json())

app.use('/api', routes)

app.listen(config?.PORT)

console.log('Server on port', config?.PORT)