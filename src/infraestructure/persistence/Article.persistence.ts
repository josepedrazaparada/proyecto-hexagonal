import ArticleEntity from '../../domain/entities/article.entity';
import ModifierGroupEntity from '../../domain/entities/modifierGroup.entity';
import ArticleRepository from '../repositories/articles.repository';
import DataBase from '../resources/data.json';

class ArticlePersistence implements ArticleRepository {
    public async findOne(id: number): (Promise<ArticleEntity | null>) {
        let article = DataBase.articles.find((article: ArticleEntity) => article.id === id);
        return article || null;
    }
    public async findAll(): Promise<Array<ArticleEntity>> {
        let articles = DataBase.articles;
        return articles;
    }
    public async findAllWithModifiers(): Promise<Array<ArticleEntity>> {
        let articles = DataBase.articles
            .map((article: ArticleEntity) => {
                let modifierGroups = DataBase.modifierGroups
                    .filter((modifierGroup: ModifierGroupEntity) => {
                        return article.modifierGroups.includes(modifierGroup.id)
                    })
                    .map((modifierGroup: ModifierGroupEntity) => {
                        let articles = DataBase.articles
                            .filter((article: ArticleEntity) => {
                                return modifierGroup.articles.includes(article.id)
                            })
                        return { ...modifierGroup, articles }
                    });
                return { ...article, modifierGroups };
            })
        return articles;
    }
    public async create(article: ArticleEntity): Promise<ArticleEntity> {
        return article;
    }
}

export default ArticlePersistence;