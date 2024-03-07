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
                    success(req, res, items, 200);
                });
        } catch (e) {
            error(req, res, e?.message, 500);
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
                    success(req, res, item, 200);
                });
        } catch (e) {
            error(req, res, e?.message, 500);
        }
    },
    create: async (req, res) => {
        try {
            const newProduct = await prisma.product
                .create({
                    data: req.body,
                })
                .then((item) => {
                    success(req, res, item, 201);
                });
        } catch (e) {
            error(req, res, e?.message, 500);
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
                    success(req, res, item, 201);
                });
        } catch (e) {
            error(req, res, e?.message, 500);
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
                    success(req, res, "Product successfully eliminated.", 201);
                });
        } catch (e) {
            error(req, res, e?.message, 500);
        }
    },
};
