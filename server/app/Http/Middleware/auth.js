import { success, error } from "../Responses/response.js";
import config from '../../../config/index.js'
import jwt from "jsonwebtoken";

const passwordPrivate = config.STRIPE_PRIVATE_KEY || '';
export default {
    generateToken: (user) => {
        try {
            const token = jwt.sign({ user: user }, passwordPrivate, { expiresIn: "1h" }, { algorithm: 'RS256' });
            return token;
        } catch (e) {
            error(req, res, e?.message, 500, 0);
        }
    },
    validateToken: (req, res, next) => {
        const token = req.headers.authorization; // Se debe enviar el token en los headers
        if (!token) {
            error(req, res, "No token was provided.", 203, 0);
        }

        jwt.verify(token, passwordPrivate, (e, decoded) => {
            if (e) {
                error(req, res, "Invalid token.", 203, 0);
            }
            req.user = decoded.user;
            next();
        })
    },

}