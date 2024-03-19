import express from 'express'
import routeApi from './routes/api.js'
import routeAuth from './routes/auth.js'
import config from './config/index.js';
import middlewareAuth from './app/Http/Middleware/auth.js';
// Importaciones para la integracion
import cors from 'cors';
import passport from 'passport';
import cookieSession from 'cookie-session';
import passportStrategy from './config/passport.js';

const app = express();

// Acepte Json
app.use(express.json())

// Inicializacion de las cookies de sesion
app.use(
    cookieSession({
        name: "session",
        keys: ["somesessionkey"],
        maxAge: 24 * 60 * 60 * 100,
    })
);

// Inicializacion del passport de google
app.use(passport.initialize());
app.use(passport.session());

// Inicializacion los cors del proyecto
// app.use(
// 	cors({
// 		origin: "http://localhost:8000",
// 		methods: "GET,POST,PUT,DELETE",
// 		credentials: true,
// 	})
// );

// begin:routes
app.use('/api', routeAuth)
// Rutas con prefijo api y middleware
app.use('/api', middlewareAuth.validateToken, routeApi)
// end:routes

app.listen(config?.PORT)

console.log('Server on port', config?.PORT)