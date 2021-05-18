import { Request, Response, NextFunction } from 'express';
import ArticlesRepository from '../../infraestructure/repositories/articles.repository';
import {
  getAllArticlesWithModifiers,
  getOneArticle,
  getAllArticles,
} from '../../application/useCases/getArticles.useCase';
import ApplicationError from '../../domain/responses/errors/application.errors';
import ErrorTypes from '../../domain/enums/errorTypes.enum';
import ApplicationSuccess from '../../domain/responses/success/application.success';
import SuccessTypes from '../../domain/enums/successTypes.enum';

class ArticlesHandler {
  private articlesRepository: ArticlesRepository;
  constructor(articlesRepository: ArticlesRepository) {
    this.articlesRepository = articlesRepository;
  }
  
  getAllArticlesWithModifiers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const articles = await getAllArticlesWithModifiers(this.articlesRepository)();
      return next(new ApplicationSuccess(articles, SuccessTypes.SUCCESS));
    } catch (error) {
      next(error);
    }
  };

  getOneArticle = async (req: Request, _res: Response, next: NextFunction) => {
    try {
      if (!req.params.id) {
        throw new ApplicationError(ErrorTypes.BAD_PARAMS);
      }
      const article = await getOneArticle(this.articlesRepository)(parseInt(req.params.id, 10));
      if (article) {
        return next(new ApplicationSuccess(article, SuccessTypes.SUCCESS));
      }
      throw new ApplicationError(ErrorTypes.NOT_FOUND);
    } catch (error) {
      next(error);
    }
  }

  getAllArticles = async (_req: Request, _res: Response, next: NextFunction) => {
    try {
      const articles = await getAllArticles(this.articlesRepository)();
      return next(new ApplicationSuccess(articles, SuccessTypes.SUCCESS));
    } catch (error) {
      next(error);
    }
  }
}

export default ArticlesHandler;
