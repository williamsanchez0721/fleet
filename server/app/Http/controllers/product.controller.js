import { success, error } from "../Responses/response.js";
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient();

export default {
    all: async (req, res) => {
        try {
            const products = await prisma.product.findMany()
                .then((items) => {
                    success(req, res, items, 200);
                });
        } catch (e) {
            error(req, res, e, 500);
        }
    },
    one: async (req, res) => {
        try {
            const product = await prisma.product.findUniqueOrThrow({
                where: {
                    id: req.params.id || '',
                },
            })
                .then((item) => {
                    success(req, res, item, 200);
                });
        } catch (e) {
            error(req, res, e, 500);
        }
    },
    create: async (req, res) => {
        const newProduct = await prisma.product
            .create({
                data: req.body,
            })
            .then((item) => {
                success(req, res, item, 200);
            });
    },
    update: async (req, res) => {
        const newProduct = await prisma.product
            .create({
                data: req.body,
            })
            .then((item) => {
                success(req, res, item, 200);
            });
    },
    delete: async (req, res) => {
        const newProduct = await prisma.product
            .create({
                data: req.body,
            })
            .then((item) => {
                success(req, res, item, 200);
            });
    },
};

/* module.exports = {
    all: function(req, res){
        res.send('All todos')
    },
    viewOne: function(req, res){
        console.log('Viewing ' + req.params.id);
    },
    create: function(req, res){
        console.log('Todo created')
    },
    destroy: function(req, res){
        console.log('Todo deleted')
    },
    edit: function(req, res){
        console.log('Todo ' + req.params.id + ' updated')
    }
}; */
