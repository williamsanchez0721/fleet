import { Router } from 'express';
import { createSession, getResponse } from '../app/Http/Controllers/payment.controller.js';
import productController from '../app/Http/Controllers/product.controller.js';
import packageController from '../app/Http/Controllers/package.controller.js';

const router = Router();

// Pruebas de implementacion STRIPE
router.get('/', getResponse)
router.get('/create-checkout-session', createSession)
router.get('/success', (req, res) => res.send('success'))
router.get('/cancel', (req, res) => res.send('cancel'))

// Products
router.get('/products', productController.all)
router.get('/products/show/:id', productController.one)
router.post('/products/create', productController.create)
router.put('/products/edit/:id', productController.update)
router.delete('/products/:id', productController.delete)

// Packages
router.get('/packages', packageController.all)
router.get('/packages/show/:id', packageController.one)
router.post('/packages/create', packageController.create)
router.put('/packages/edit/:id', packageController.update)
router.delete('/packages/:id', packageController.delete)

export default router;