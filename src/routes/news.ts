import express from 'express';
import asyncHandler from 'express-async-handler';
import NewsController from '../controllers/news.controller';
import { validateParams } from '../middleware/validateParams.middlware';
import newsRules from '../rules/news.rules';

const router = express.Router();

router.get('/', asyncHandler(NewsController.getAllNews));

router.get(
    '/:id',
    validateParams('params', newsRules.list),
    asyncHandler(NewsController.getNewsDetails)
);

export default router;