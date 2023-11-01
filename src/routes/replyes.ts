import express from 'express';
import asyncHandler from 'express-async-handler';
import { AuthMiddlware } from '../middleware/auth.middleware';
import { ReplyController } from '../controllers/reply.controller';
import { validateParams } from '../middleware/validateParams.middlware';
import replyesRules from '../rules/replyes.rules';

const router = express.Router();

router.get('/:id', asyncHandler(ReplyController.list));

router.post(
    "/", 
    AuthMiddlware.isUserAuthorized,
    validateParams('body', replyesRules.add),
    asyncHandler(ReplyController.add)
);

export default router;