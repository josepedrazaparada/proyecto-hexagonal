import ArticleEntity from '../../domain/entities/article.entity';

interface ArticleRepository {
    findOne(id: number): ( Promise<ArticleEntity | null>);
    findAll(): Promise <Array<ArticleEntity>>;
    create(article: ArticleEntity): Promise<ArticleEntity>;
    findAllWithModifiers(): Promise<Array<ArticleEntity>>;
}

export default ArticleRepository;
