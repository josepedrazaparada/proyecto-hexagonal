import ItemEntity from './item.entity';
import ArticleEntity from './article.entity';

interface ModifierGroupEntity extends ItemEntity {
    maximun: number;
    minimun: number;
    articles: Array<number> | Array<ArticleEntity>
}

export default ModifierGroupEntity;