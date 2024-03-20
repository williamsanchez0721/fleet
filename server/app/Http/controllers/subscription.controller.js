import { success, error } from "../Responses/response.js";
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient();

async function findById(id) {
    const item = await prisma.subscription.findUnique({
        where: {
            id: id,
            deletedAt: false,
        },
        include: {
            user: true,
            subscriptionPackage: true,
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
            // Buscar subscripciones no eliminados
            const subscriptions = await prisma.subscription.findMany({
                where: {
                    deletedAt: false
                },
                include: {
                    user: true,
                    subscriptionPackage: true,
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
            const new_subscription = await prisma.subscription
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
            // Buscamos el subscription
            const item = await findById(id);
            // Actualizamos subscription buscado
            const subscriptionOne = await prisma.subscription.update({
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
            // Buscamos el subscription
            const id = Number(req.params.id)
            // Buscamos el subscription
            const item = await findById(id);
            // Actualizamos subscription campo deleted
            const subscriptionOne = await prisma.subscription.update({
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
