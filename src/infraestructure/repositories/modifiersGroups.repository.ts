import ModifierGroupEntity from '../../domain/entities/modifierGroup.entity';

interface ModifierGroupRepository {
    findOne(id:number): Promise<ModifierGroupEntity | null>
    findAll(): Promise <Array<ModifierGroupEntity>>
    create(article: ModifierGroupEntity): Promise<ModifierGroupEntity>
}

export default ModifierGroupRepository;