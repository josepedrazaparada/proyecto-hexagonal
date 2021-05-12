import express from 'express';
import articlesRouter from './articles.router';
import dependencies from '../../config/dependencies';

const router = express.Router();

router.use('/articles', articlesRouter(dependencies));

export default router;