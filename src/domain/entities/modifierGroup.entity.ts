import ArticleEntity from './article.entity';

interface ModifierGroupEntity {
    id: number;
    name: string;
    maximun: number;
    minimun: number;
    articles: Array<number> | Array<ArticleEntity>
}

export default ModifierGroupEntity;