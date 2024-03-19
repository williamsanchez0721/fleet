import { success, error } from "../Responses/response.js";
import { PrismaClient, Prisma } from '@prisma/client'
import config from '../../../config/index.js'
import auth from "../Middleware/auth.js";
import passport from 'passport';
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

// Encriptar contraseña
async function encryption(password) {
    const textCrypt = await bcrypt.hash(password.toString(), 5);
    return textCrypt;
}

export default {
    login: async (req, res) => {
        try {
            // Buscamos el usuario
            const user = await prisma.user.findUniqueOrThrow({
                where: {
                    email: req.body.email,
                },
            });
            // Comparamos las contraseñas
            return bcrypt.compare(req.body.password, user?.password).then(result => {
                // Si es un si, generamos token
                if (result === true) {
                    const token = auth.generateToken({ ...user });
                    return success(req, res, 'Successfully consulted.', 200, { "token": token });
                } else {
                    return error(req, res, 'Invalid information.', 404, 0);
                }
            })
        } catch (e) {
            return error(req, res, e?.message, 500, 0);
        }
    },
    // Integracion con google
    loginSuccess: async (req, res) => {
        if (req.user) {
            return success(req, res, 'Successfully Loged In', 200, { "user": req.user });
        } else {
            return error(req, res, "Not Authorized", 403, 0);
        }
    },
    loginFailed: async (req, res) => {
        return error(req, res, "Log in failure", 401, 0);
    },
    google: (req, res, next) => { // Añadido req, res, next aquí
        passport.authenticate('google', {
            scope: ['email', 'profile']
        })(req, res, next);
    },
    googleCallback: (req, res, next) => { // Añadido req, res, next aquí
        passport.authenticate("google", {
            successRedirect: config?.CLIENT_URL,
            failureRedirect: "/login/failed",
        })(req, res, next);
    },
    logoutGoogle: async (req, res) => {
        req.logout();
        res.redirect(config?.CLIENT_URL);
    }
};
