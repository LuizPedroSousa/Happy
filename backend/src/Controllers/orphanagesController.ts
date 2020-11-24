import { Request, Response, Express } from 'express';
import { getRepository } from 'typeorm';
import Orphanages from '../Models/Orphanages';
import OrphanagesView from '../Views/Orphanages_view';
import * as Yup from 'yup';

class OrphanagesController {
    async index (req: Request, res: Response) {
        const orphanagesRepository = getRepository(Orphanages);
        const orphanage = await orphanagesRepository.find({
            relations: ['images']
        });
        if (!orphanage[0]) {
            return res.status(400).json({
                error: 'Orphanage not found'
            });
        }

        return res.status(201).json({
            Status: 'Okay',
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

        const orphanagesRepository = getRepository(Orphanages);

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

        const orphanage = orphanagesRepository.create(data);
        await orphanagesRepository.save(orphanage);

        return res.status(201).json({
            Status: 'Okay, datas inserts into orphanage table',
            orphanage
        });
    }

    async show (req: Request, res: Response) {
        const { id } = req.params;
        const orphanagesRepository = getRepository(Orphanages);
        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        });

        return res.status(201).json({
            Status: 'Okay',
            orphanage: OrphanagesView.Render(orphanage)
        });
    }
}

export default new OrphanagesController();
