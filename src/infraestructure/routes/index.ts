import { Router } from 'express';
import articlesRouter from './articles.router';
import dependencies from '../../config/dependencies';
import responseMiddleware from '../../interface/middlewares/response.middleware';

const router: Router = Router();

router.use('/articles', articlesRouter(dependencies));
router.use(responseMiddleware);

export default router;
