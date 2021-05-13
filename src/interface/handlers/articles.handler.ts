import { Request, Response, Next } from 'express';
import ArticlesRepository from "../../infraestructure/repositories/articles.repository";
import {
  getAllArticlesWithModifiers,
  getOneArticle,
  getAllArticles,
} from "../../useCases/getArticles.useCase";

class ArticlesHandler {
  private articlesRepository: ArticlesRepository;

  constructor(articlesRepository: ArticlesRepository) {
    this.articlesRepository = articlesRepository;
  }

  async getAllArticlesWithModifiers(req: Request, res: Response, next: Next) {
    try {
      let articles = await getAllArticlesWithModifiers(this.articlesRepository)();
      return res.status(200).send(articles);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async getOneArticle(req: Request, res: Response, next: Next) {
    try {
      if (!req.params.id) {
        return res.status(400);
      }
      let article = await getOneArticle(this.articlesRepository)(req.params.id);
      if (article) {
        return res.status(200).send(article);
      }
      return res.status(404);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async getAllArticles(req: Request, res: Response, next: Next) {
    try {
      let articles = await getAllArticles(this.articlesRepository)();
      return res.status(200).send(articles);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

export default ArticlesHandler;
