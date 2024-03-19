import { success, error } from "../Responses/response.js";
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient();

export default {
    all: async (req, res) => {
        try {
            // Buscar paquetes no eliminados
            const packages = await prisma.package.findMany({
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
            const id_package = Number(req.params.id)
            const packageOne = await prisma.package.findUniqueOrThrow({
                where: {
                    id: id_package || 0,
                },
            })
                .then((item) => {
                    return success(req, res, 'Successfully consulted.', 200, item);
                });
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
            const id_package = Number(req.params.id)
            // Actualizamos package buscado
            const packageOne = await prisma.package.update({
                where: {
                    id: id_package,
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
            const id_package = Number(req.params.id)
            // Actualizamos package campo deleted
            const packageOne = await prisma.package.update({
                where: {
                    id: id_package,
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
