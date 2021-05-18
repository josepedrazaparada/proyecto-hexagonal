import ModifierGroupEntity from '../../domain/entities/modifierGroup.entity';
import ModifierGroupsRepository from '../repositories/modifiersGroups.repository';
import DataBase from '../resources/data.json';

class ModifierGroupPersistence implements ModifierGroupsRepository {

    private static instance: ModifierGroupPersistence;

    constructor() {}

    public static getInstance(): ModifierGroupPersistence {
        if (!ModifierGroupPersistence.instance) {
            ModifierGroupPersistence.instance = new ModifierGroupPersistence();
        }

        return ModifierGroupPersistence.instance;
    }

    public async findOne(id: number): Promise<ModifierGroupEntity | null> {
        const modifierGroup = DataBase.modifierGroups.find((modifier: ModifierGroupEntity) => modifier.id === id);
        return modifierGroup || null;
    }
    public async findAll(): Promise<Array<ModifierGroupEntity>> {
        const modifierGroups = DataBase.modifierGroups;
        return modifierGroups;
    }
    public async create(article: ModifierGroupEntity): Promise<ModifierGroupEntity> {
        return article;
    }
}

export default ModifierGroupPersistence;
