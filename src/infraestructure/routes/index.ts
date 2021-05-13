import { Router } from 'express';
import articlesRouter from './articles.router';
import dependencies from '../../config/dependencies';

const router : Router = Router();

router.use('/articles', articlesRouter(dependencies));

export default router;