import { getConnection, getRepository } from 'typeorm';

export default async () => {
    const entities = getConnection().entityMetadatas;

    for (const entity of entities) {
        const repository = getRepository(entity.name);
        await repository.delete({});
    }
};
