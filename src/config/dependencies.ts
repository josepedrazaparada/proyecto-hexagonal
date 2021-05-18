import ArticlesPersistor from '../infraestructure/persistence/Article.persistence';
import ModifierGroupsPersistor from '../infraestructure/persistence/ModifierGroups.persistence';

const dependencies = {
    articlesPersistor: new ArticlesPersistor(),
    modifierGroupsPersistor: new ModifierGroupsPersistor()
};

export default dependencies;
