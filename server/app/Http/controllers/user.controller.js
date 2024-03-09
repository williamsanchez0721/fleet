import { success, error } from "../Responses/response.js";
import { PrismaClient, Prisma } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

async function findUserById(id) {
    const user = await prisma.user.findUnique({
        where: {
            id: id,
            deletedAt: false,
        }
    });
    if (!user) {
        throw new Error('Not found.');
    }
    return user;
}

// Encriptar contraseña
async function encryption(password) {
    const textCrypt = await bcrypt.hash(password.toString(), 5);
    return textCrypt;
}

export default {
    all: async (req, res) => {
        try {
            // Buscar users no eliminados
            const users = await prisma.user.findMany({
                where: {
                    deletedAt: false
                }
            })
                .then((items) => {
                    success(req, res, 'Successfully consulted.', 200, items);
                });
        } catch (e) {
            error(req, res, e?.message, 500, 0);
        }
    },
    one: async (req, res) => {
        try {
            const id = Number(req.params.id)
            const user = await findUserById(id);
            success(req, res, 'Successfully consulted.', 200, user);
        } catch (e) {
            error(req, res, e?.message, 500, 0);
        }
    },
    create: async (req, res) => {
        try {
            // Cambiar la contraseña
            req.body.password = await encryption(req.body.password)
            // Crear usuario
            const new_user = await prisma.user
                .create({
                    data: req.body,
                })
                .then((item) => {
                    success(req, res, 'Successfully created.', 201, item);
                });
        } catch (e) {
            error(req, res, e?.message, 500, 0);
        }
    },
    update: async (req, res) => {
        try {
            // return res.json(req.body)
            const id = Number(req.params.id)
            // Buscamos el usuario
            const user = await findUserById(id);
            // Actualizamos
            const updatedUser = await prisma.user.update({
                where: {
                    id: user.id,
                    deletedAt: false,
                },
                data: req.body,
            });
            success(req, res, 'Successfully updated.', 201, updatedUser);
        } catch (e) {
            error(req, res, e?.message, 500, 0);
        }
    },
    delete: async (req, res) => {
        try {
            // Buscamos el user
            const id = Number(req.params.id)
            // Buscamos el usuario
            const user = await findUserById(id);
            // Actualizamos
            await prisma.user.update({
                where: {
                    id: id,
                },
                data: {
                    deletedAt: true
                },
            });
            success(req, res, "Successfully eliminated.", 200);
        } catch (e) {
            error(req, res, e?.message, 500, 0);
        }
    },
};
