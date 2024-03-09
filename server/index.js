import express from 'express'
import routeApi from './routes/api.js'
import routeWeb from './routes/web.js'
import config from './config/index.js';
import middlewareAuth from './app/Http/Middleware/auth.js';

const app = express();

// Acepte Json
app.use(express.json())

// begin:routes
app.use('/api', routeWeb)
// Rutas con prefijo api y middleware
app.use('/api', middlewareAuth.validateToken, routeApi)
// end:routes

app.listen(config?.PORT)

console.log('Server on port', config?.PORT)