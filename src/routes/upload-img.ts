import express from 'express';
import asyncHandler from 'express-async-handler';
import  { UploadImgController } from '../controllers/upload-img.controller';
import { AuthMiddlware } from '../middleware/auth.middleware';
import fileMiddleware from '../middleware/upload.middlware'

const router = express.Router();

router.post(
    "/", 
    AuthMiddlware.isUserAuthorized,
    fileMiddleware.single('image'),
    asyncHandler(UploadImgController.save)
);

export default router;