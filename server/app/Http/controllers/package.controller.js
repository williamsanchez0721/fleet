import { success, error } from "../Responses/response.js";
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient();

async function findById(id) {
    const item = await prisma.package.findUnique({
        where: {
            id: id,
            deletedAt: false,
        },
        include: {
            services: true,
            subscriptions: true,
        }
    });
    if (!item) {
        throw new Error('Not found.');
    }
    return item;
}

export default {
    all: async (req, res) => {
        try {
            // Buscar paquetes no eliminados
            const packages = await prisma.package.findMany({
                where: {
                    deletedAt: false
                },
                include: {
                    services: true,
                    subscriptions: true,
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
            const new_package = await prisma.package
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
            // Buscamos el package
            const item = await findById(id);
            // Actualizamos package buscado
            const packageOne = await prisma.package.update({
                where: {
                    id: item.id,
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
            // Buscamos el package
            const id = Number(req.params.id)
            // Buscamos el package
            const item = await findById(id);
            // Actualizamos package campo deleted
            const packageOne = await prisma.package.update({
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
