import authController from '../app/Http/Controllers/auth.controller.js';
import { Router } from 'express';
import passport from 'passport';

const router = Router();

// Rutas login
router.post('/login', authController.login)

// Rutas de google
router.get("/login/success", authController.loginSuccess);

router.get("/login/failed", authController.loginFailed);

router.get("/google", authController.google);

router.get("/google/callback", authController.googleCallback);

router.get("/logout", authController.logoutGoogle);

export default router;