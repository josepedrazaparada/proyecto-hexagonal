import ModifierGroupEntity from '../../domain/entities/modifierGroup.entity';
import ModifierGroupsRepository from '../repositories/modifiersGroups.repository';
import DataBase from '../resources/data.json';

class ModifierGroupPersistence implements ModifierGroupsRepository {
    
    public async findOne(id: number): Promise<ModifierGroupEntity> {
        let modifierGroup = DataBase.modifierGroups.find(modifier => modifier.id === id);
        return modifierGroup;
    }
    public async findAll(): Promise<Array<ModifierGroupEntity>> {
        let modifierGroups = DataBase.modifierGroups;
        return modifierGroups;
    }
    public async create(article: ModifierGroupEntity): Promise<ModifierGroupEntity> {
        return article;
    }
}

export default ModifierGroupPersistence;