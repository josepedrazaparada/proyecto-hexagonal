import ArticleEntity from '../../domain/entities/article.entity';
import ArticleRepository from '../repositories/articles.repository';
import DataBase from '../resources/data.json';

class ArticlePersistence implements ArticleRepository {
    public async findOne(id: number): Promise<ArticleEntity> {
        let article = DataBase.articles.find(article => article.id === id);
        return article;
    }
    public async findAll(): Promise<Array<ArticleEntity>> {
        let articles = DataBase.articles;
        return articles;
    }
    public async findAllWithModifiers(): Promise<Array<ArticleEntity>> {
        let articles = DataBase.articles;
        articles.map(article => {
            let modifierGroups =
                DataBase.modifierGroups
                .filter(mdg => article.modifierGroups.includes(mdg.id))
                .map(mdg => {
                    let articles = DataBase.articles.filter(art => mdg.articles.includes(art.id))
                    return { ...mdg, articles }
                })
            return { ...article, modifierGroups}
        })
        return articles;
    }
    public async create(article: ArticleEntity): Promise<ArticleEntity> {
        return article;
    }
}

export default ArticlePersistence;