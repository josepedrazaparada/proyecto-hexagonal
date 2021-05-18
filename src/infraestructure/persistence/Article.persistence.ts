import ArticleEntity from '../../domain/entities/article.entity';
import ModifierGroupEntity from '../../domain/entities/modifierGroup.entity';
import ArticleRepository from '../repositories/articles.repository';
import DataBase from '../resources/data.json';
import ApplicationError from '../../domain/responses/errors/application.errors';
import ErrorTypes from '../../domain/enums/errorTypes.enum';

class ArticlePersistence implements ArticleRepository {
  // implementar singleton

  private static instance: ArticlePersistence;

  constructor() {}

  public static getInstance(): ArticlePersistence {
    if (!ArticlePersistence.instance) {
      ArticlePersistence.instance = new ArticlePersistence();
    }

    return ArticlePersistence.instance;
  }

  public async findOne(id: number): Promise<ArticleEntity | null> {
    try {
      const article = DataBase.articles.find((art: ArticleEntity) => art.id === id);
      return article || null;
    } catch (err) {
      throw new ApplicationError(ErrorTypes.INTERNAL_ERROR);
    }
  }
  public async findAll(): Promise<Array<ArticleEntity>> {
    try {
      const articles = DataBase.articles;
      return articles;
    } catch (err) {
        throw new ApplicationError(ErrorTypes.INTERNAL_ERROR);
    }
  }
  public async findAllWithModifiers(): Promise<Array<ArticleEntity>> {
    try {
      const articles = DataBase.articles.map((article: ArticleEntity) => {
        const modifierGroups = DataBase.modifierGroups
          .filter((mg: ModifierGroupEntity) => article.modifierGroups.includes(mg.id))
          .map((modifierGroup: ModifierGroupEntity) => {
            const thisArticles = DataBase.articles.filter((art: ArticleEntity) =>
              modifierGroup.articles.includes(art.id)
            );
            return { ...modifierGroup, articles: thisArticles };
          });
        return { ...article, modifierGroups };
      });
      return articles;
    } catch (err) {
        throw new ApplicationError(ErrorTypes.INTERNAL_ERROR);
    }
  }
  public async create(article: ArticleEntity): Promise<ArticleEntity> {
    return article;
  }
}

export default ArticlePersistence;
