import express from 'express';
import asyncHandler from 'express-async-handler';
import { CommentsControler } from '../controllers/comments.controller';
import { AuthMiddlware } from '../middleware/auth.middleware';
import { validateParams } from '../middleware/validateParams.middlware';
import commentsRules from '../rules/comment.rules';

const router = express.Router();

router.get('/:id', validateParams('params', commentsRules.getByNewsId), asyncHandler(CommentsControler.list));

router.post(
    "/", 
    AuthMiddlware.isUserAuthorized,
    validateParams('body', commentsRules.add), 
    asyncHandler(CommentsControler.add)
);

export default router;