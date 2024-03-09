import { success, error } from "../Responses/response.js";
import { PrismaClient, Prisma } from '@prisma/client'
import auth from "../Middleware/auth.js";
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
                    success(req, res, 'Successfully consulted.', 200, { "token": token });
                } else {
                    error(req, res, 'Invalid information.', 404, 0);
                }
            })
            success(req, res, 'Successfully consulted.', 200, user);
        } catch (e) {
            error(req, res, e?.message, 500, 0);
        }
    },
};
