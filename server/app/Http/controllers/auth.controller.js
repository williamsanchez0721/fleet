import { success, error } from "../Responses/response.js";
import { PrismaClient, Prisma } from '@prisma/client'
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
                    email: req.email,
                },
            });
            // Comparamos las contraseñas

            success(req, res, 'Successfully consulted.', 200, user);
        } catch (e) {
            error(req, res, e?.message, 500, 0);
        }
    },
};
