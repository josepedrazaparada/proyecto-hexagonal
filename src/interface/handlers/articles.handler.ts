import {
  getAllArticlesWithModifiers,
  getOneArticle,
  getAllArticles,
} from "../../useCases/getArticles.useCase";
import ArticlesRepository from "../../infraestructure/repositories/articles.repository";

class ArticlesHandler {
  private articlesRepository: ArticlesRepository;

  constructor(articlesRepository) {
    this.articlesRepository = articlesRepository;
  }

  async getAllArticlesWithModifiers(req, res, next) {
    try {
      let articles = await getAllArticlesWithModifiers(this.articlesRepository)();
      return res.status(200).send(articles);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async getOneArticle(req, res, next) {
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
  async getAllArticles(req, res, next) {
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
