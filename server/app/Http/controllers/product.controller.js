import { success, error } from "../Responses/response.js";
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient();

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
                    success(req, res, 'Successfully consulted.', 200, items);
                });
        } catch (e) {
            error(req, res, e?.message, 500, 0);
        }
    },
    one: async (req, res) => {
        try {
            const id = Number(req.params.id)
            const product = await prisma.product.findUniqueOrThrow({
                where: {
                    id: id || 0,
                },
            })
                .then((item) => {
                    success(req, res, 'Successfully consulted.', 200, item);
                });
        } catch (e) {
            error(req, res, e?.message, 500, 0);
        }
    },
    create: async (req, res) => {
        try {
            const newProduct = await prisma.product
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
            const id = Number(req.params.id)
            // Actualizamos producto buscado
            const product = await prisma.product.update({
                where: {
                    id: id,
                },
                data: req.body,
            })
                .then((item) => {
                    success(req, res, 'Successfully updated.', 201, item);
                });
        } catch (e) {
            error(req, res, e?.message, 500, 0);
        }
    },
    delete: async (req, res) => {
        try {
            const id = Number(req.params.id)
            // Actualizamos producto campo deleted
            const product = await prisma.product.update({
                where: {
                    id: id,
                },
                data: {
                    deletedAt: true
                },
            })
                .then((item) => {
                    success(req, res, "Successfully eliminated.", 200);
                });
        } catch (e) {
            error(req, res, e?.message, 500, 0);
        }
    },
};
