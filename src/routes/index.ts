import express from 'express';
import newsRoutes from './news';
import commentsRoutes from './comments';
import authRoutes from './auth';
import replyRoutes from './replyes';
import uploadRoutes from './upload-img';

const router = express.Router();

router.use('/news', newsRoutes)
router.use('/comments', commentsRoutes);
router.use('/auth', authRoutes);
router.use('/reply', replyRoutes);
router.use('/upload', uploadRoutes);

export default router;