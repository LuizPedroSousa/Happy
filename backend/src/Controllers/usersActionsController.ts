import { Request, Response, Express } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../Models/Orphanages';
import Users from '../Models/Users';
import OrphanageView from '../Views/Orphanages_view';
import UsersView from '../Views/Users_view';
import * as Yup from 'yup';
import OrphanageImages from '../Models/Orphanage_Images';
import { uuid } from 'uuidv4';

class UserActionsController {
    async acceptUser (req: Request, res: Response) {
        const { id } = req.params;

        const userRepository = getRepository(Users);

        const user = await userRepository.findOne(id, { relations: ['image'] });

        if (!user) {
            return res.status(404).json({
                error: 'Unable to resolve this: User not found'
            });
        };

        if (user.status) {
            return res.status(400).json({
                error: 'Unable to resolve this: User are admin'
            });
        }

        await userRepository.update(id, { status: true });

        const userUpdated = await userRepository.findOneOrFail(id, { relations: ['image'] });

        return res.status(201).json({
            Okay: 'Orphanage accepted with successfully',
            user: UsersView.render(userUpdated)
        });
    }

    async rejectUser (req: Request, res: Response) {
        const { id } = req.params;

        const userRepository = getRepository(Users);

        const user = await userRepository.findOne(id, { relations: ['image'] });

        if (!user) {
            return res.status(404).json({
                error: 'Unable to resolve this: User not found'
            });
        }

        if (user.status) {
            return res.status(400).json({
                error: 'Unable to resolve this: User are admin'
            });
        }

        await userRepository.delete(id);

        return res.status(201).json({
            Okay: 'User rejected with successfully',
            user: UsersView.render(user)
        });
    }

    async acceptOrphanage (req: Request, res: Response) {
        const { id } = req.params;

        const orphanageRepository = getRepository(Orphanage);

        const orphanage = await orphanageRepository.findOne(id, { relations: ['images'] });

        if (!orphanage) {
            return res.status(404).json({
                error: 'Unable to resolve this: Orphanage not found'
            });
        };

        if (orphanage.status) {
            return res.status(400).json({
                error: 'Unable to resolve this: Orphanage is already accepted'
            });
        };

        await orphanageRepository.update(id, { status: true });
        const orphanageUpdated = await orphanageRepository.findOneOrFail(id, { relations: ['images'] });

        return res.status(201).json({
            orphanage: OrphanageView.Render(orphanageUpdated)
        });
    }

    async rejectOrphanage (req:Request, res: Response) {
        const { id } = req.params;

        const orphanageRepository = getRepository(Orphanage);

        const orphanage = await orphanageRepository.findOne(id, { relations: ['images'] });

        if (!orphanage) {
            return res.status(404).json({
                error: 'Unable to resolve this: Orphanage not found'
            });
        };

        if (orphanage.status) {
            return res.status(400).json({
                error: 'Unable to resolve this: Orphanage is already accepted'
            });
        };

        await orphanageRepository.delete(id);

        return res.status(201).json({
            Okay: 'Orphanage rejected with successfully',
            orphanage: OrphanageView.Render(orphanage)
        });
    }

    async updateOrphanage (req: Request, res: Response) {
        const { id } = req.params;
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            whatsapp,
            open_on_weekends,
            opening_hours

        } = req.body;

        const orphanageRepository = getRepository(Orphanage);
        const imageRepository = getRepository(OrphanageImages);

        const orphanage = await orphanageRepository.findOne(id, { relations: ['images'] });

        if (!orphanage) {
            return res.status(404).json({
                error: 'Unable to resolve this: Orphanage not found'
            });
        };

        if (!orphanage.status) {
            return res.status(400).json({
                error: 'Unable to resolve this: Orphanage is pending'
            });
        };

        const reqFile = req.files as Express.Multer.File[];

        const images = reqFile[0]
            ? reqFile.map(img => {
                return {
                    id: uuid(),
                    path: img.filename,
                    orphanage
                };
            })
            : orphanage.images;

        const data = {
            id,
            name: name || orphanage.name,
            latitude: latitude || orphanage.latitude,
            longitude: longitude || orphanage.longitude,
            about: about || orphanage.about,
            instructions: instructions || orphanage.instructions,
            whatsapp: whatsapp || orphanage.whatsapp,
            open_on_weekends: open_on_weekends || orphanage.open_on_weekends,
            opening_hours: opening_hours || orphanage.opening_hours,
            images
        };

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            whatsapp: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            opening_hours: Yup.string().required(),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required()
                })
            )
        });

        await schema.validate(data, {
            abortEarly: false
        });

        reqFile[0] && await imageRepository.delete({ orphanage });
        await orphanageRepository.save(data);

        const orphanageUpdated = await orphanageRepository.findOneOrFail(id, { relations: ['images'] });

        return res.status(201).json({
            Okay: 'Orphanage updated with successfully',
            orphanage: OrphanageView.Render(orphanageUpdated)
        });
    }
}

export default new UserActionsController();
