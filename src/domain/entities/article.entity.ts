import ItemEntity from './item.entity';
import ModifierGroupEntity from './modifierGroup.entity';

interface ArticleEntity extends ItemEntity {
    stock: number;
    description: string;
    price: number;
    urlImage: string;
    modifierGroups: Array<number> | Array<ModifierGroupEntity>
} 

export default ArticleEntity;