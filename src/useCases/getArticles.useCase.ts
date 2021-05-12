import ArticlesRepository from '../infraestructure/repositories/articles.repository';
import ArticleEntity from '../domain/entities/article.entity';

const getAllArticlesWithModifiers = (articlesRepository: ArticlesRepository) => async () =>{
    let articles : Array<ArticleEntity> = await articlesRepository.findAllWithModifiers();
    return articles;
}

const getAllArticles = (articlesRepository: ArticlesRepository) => async () =>{
    let articles : Array<ArticleEntity> = await articlesRepository.findAll();
    return articles;
}

const getOneArticle = (articlesRepository: ArticlesRepository) => async (id:number) =>{
    let article : ArticleEntity = await articlesRepository.findOne(id);
    return article;
}

export { getAllArticlesWithModifiers, getAllArticles, getOneArticle };