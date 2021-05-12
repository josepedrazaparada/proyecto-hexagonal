import express from 'express';
import ArticlesHandler from '../../interface/handlers/articles.handler';

const articlesRouter = dependencies => {

    const articlesHandler = new ArticlesHandler(dependencies.articlesPersistor);
    const router = express.Router();

    router.get('/withModifiers', articlesHandler.getAllArticlesWithModifiers);
    router.get('/withoutModifiers', articlesHandler.getAllArticles);
    router.get('/:id', articlesHandler.getOneArticle);

    return router;
}

export default articlesRouter;