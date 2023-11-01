import express from 'express';
import asyncHandler from 'express-async-handler';
import { AuthController } from '../controllers/auth.controller';
import { AuthMiddlware } from '../middleware/auth.middleware';
import { validateParams } from '../middleware/validateParams.middlware';
import authRules from '../rules/auth.rules';

const router = express.Router();

router.post("/login",  validateParams('body', authRules.login), asyncHandler(AuthController.login))

router.post("/register",  validateParams('body', authRules.register), asyncHandler(AuthController.register))

router.get("/logout/:id", AuthMiddlware.isUserAuthorized, asyncHandler(AuthController.logout))
export default router;