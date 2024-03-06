import { Router } from 'express';
import { createSession } from '../app/Http/controllers/payment.controller.js';

const router = Router();

router.get('/create-checkout-session', createSession)
router.get('/success', (req, res) => res.send('success'))
router.get('/cancel', (req, res) => res.send('cancel'))

export default router;