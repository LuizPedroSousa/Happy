import { Request, Response, Express } from 'express';
import { getRepository } from 'typeorm';
import Orphanages from '../Models/Orphanages';
import OrphanagesView from '../Views/Orphanages_view';
import * as Yup from 'yup';

// interface IOrphanageFilters{
//     status?:boolean;
//     name?: string;
//     open_on_weekends?: boolean;
// }

class OrphanagesController {
    async index (req: Request, res: Response) {
        const orphanageRepository = getRepository(Orphanages);

        const orphanage = await orphanageRepository.find({
            where: { status: true },
            relations: ['images'],
            order: {
                createdAt: 'DESC',
                name: 'ASC'
            }
        });

        if (!orphanage[0]) {
            return res.status(400).json({
                error: 'Orphanages not found'
            });
        }

        return res.status(201).json({
            Orphanages: OrphanagesView.RenderMany(orphanage)
        });
    }

    async create (req: Request, res: Response) {
        const {
            latitude,
            longitude,
            name,
            about,
            whatsapp,
            instructions,
            opening_hours,
            open_on_weekends
        } = req.body;

        const orphanageRepository = getRepository(Orphanages);

        const reqImages = req.files as Express.Multer.File[];

        const images = reqImages
            ? reqImages.map(Images => {
                return { path: Images.filename };
            })
            : [];

        const data = {
            name,
            latitude,
            longitude,
            about,
            whatsapp,
            instructions,
            opening_hours,
            open_on_weekends: open_on_weekends === 'true',
            images
        };

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            whatsapp: Yup.string().required(),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required()
                })
            )
        });

        await schema.validate(data, {
            abortEarly: false
        });

        const orphanage = orphanageRepository.create(data);
        await orphanageRepository.save(orphanage);

        return res.status(201).json({
            Okay: 'Orphanage created with successfully',
            orphanage: OrphanagesView.Render(orphanage)
        });
    }

    async show (req: Request, res: Response) {
        const { id } = req.params;
        const orphanageRepository = getRepository(Orphanages);
        const orphanage = await orphanageRepository.findOneOrFail(id, {
            relations: ['images']
        });

        if (!orphanage.status) {
            return res.status(400).json({
                error: 'Orphanage is being reviewed by one of our admins'
            });
        }

        return res.status(201).json({
            orphanage: OrphanagesView.Render(orphanage)
        });
    }
}

export default new OrphanagesController();
