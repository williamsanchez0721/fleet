import { Router } from 'express';
import { createSession, getResponse } from '../app/Http/Controllers/payment.controller.js';
import productController from '../app/Http/Controllers/product.controller.js';

const router = Router();

// Pruebas de implementacion STRIPE
router.get('/', getResponse)
router.get('/create-checkout-session', createSession)
router.get('/success', (req, res) => res.send('success'))
router.get('/cancel', (req, res) => res.send('cancel'))

// Products
router.get('/products', productController.all)
router.get('/products/:id', productController.one)
router.post('/products/create', productController.create)
router.put('/products/:id', productController.update)
router.delete('/products/:id', productController.delete)

export default router;