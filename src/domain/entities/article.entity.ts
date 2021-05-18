import ItemEntity from './item.entity';
import ModifierGroupEntity from './modifierGroup.entity';


interface ArticleEntity extends ItemEntity {
    stock: number;
    description: string;
    price: number;
    urlImage: string;
    modifierGroups: Array<number | ModifierGroupEntity>;
    isSell: Boolean;
    type: string;
}

export default ArticleEntity;
