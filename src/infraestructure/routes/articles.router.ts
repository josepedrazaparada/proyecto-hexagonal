import { Router } from 'express';
import ArticlesHandler from '../../interface/handlers/articles.handler';
import ArticlesPersistor from '../persistence/Article.persistence';

const articlesRouter = (dependencies: { articlesPersistor: ArticlesPersistor }) => {

    const articlesHandler = new ArticlesHandler(dependencies.articlesPersistor);
    const router: Router = Router();

    router.get('/withModifiers', articlesHandler.getAllArticlesWithModifiers);
    router.get('/withoutModifiers', articlesHandler.getAllArticles);
    router.get('/oneWithModifiers/:id', articlesHandler.getOneArticle);

    return router;
};

export default articlesRouter;
