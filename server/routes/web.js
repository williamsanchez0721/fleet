import authController from '../app/Http/Controllers/auth.controller.js';
import { Router } from 'express';

const router = Router();

// Rutas login
router.post('/login', authController.login)

export default router;