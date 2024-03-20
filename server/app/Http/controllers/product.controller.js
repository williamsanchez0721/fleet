import { success, error } from "../Responses/response.js";
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient();

async function findById(id) {
    const user = await prisma.product.findUnique({
        where: {
            id: id,
            deletedAt: false,
        },
        include: {
            benefits: true
        }
    });
    if (!user) {
        throw new Error('Not found.');
    }
    return user;
}

export default {
    all: async (req, res) => {
        try {
            // Buscar productos no eliminados
            const products = await prisma.product.findMany({
                where: {
                    deletedAt: false
                }
            })
                .then((items) => {
                    return success(req, res, 'Successfully consulted.', 200, items);
                });
        } catch (e) {
            return error(req, res, e?.message, 500, 0);
        }
    },
    one: async (req, res) => {
        try {
            const id = Number(req.params.id)
            const item = await findById(id);
            return success(req, res, 'Successfully consulted.', 200, item);
        } catch (e) {
            return error(req, res, e?.message, 500, 0);
        }
    },
    create: async (req, res) => {
        try {
            const newProduct = await prisma.product
                .create({
                    data: req.body,
                })
                .then((item) => {
                    return success(req, res, 'Successfully created.', 201, item);
                });
        } catch (e) {
            return error(req, res, e?.message, 500, 0);
        }
    },
    update: async (req, res) => {
        try {
            const id = Number(req.params.id)
            // Actualizamos producto buscado
            const product = await prisma.product.update({
                where: {
                    id: id,
                },
                data: req.body,
            })
                .then((item) => {
                    return success(req, res, 'Successfully updated.', 201, item);
                });
        } catch (e) {
            return error(req, res, e?.message, 500, 0);
        }
    },
    delete: async (req, res) => {
        try {
            // Guardamos el id
            const id = Number(req.params.id)
            // Buscamos el objeto
            const item = await findById(id);
            // Actualizamos producto campo deleted
            const product = await prisma.product.update({
                where: {
                    id: item.id,
                },
                data: {
                    deletedAt: true
                },
            })
                .then((item) => {
                    return success(req, res, "Successfully eliminated.", 200);
                });
        } catch (e) {
            return error(req, res, e?.message, 500, 0);
        }
    },
};
