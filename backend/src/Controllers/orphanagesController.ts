import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanages from '../Models/Orphanages';
import OrphanagesView from '../Views/Orphanages_view';
import * as Yup from 'yup';

export default class orphanagesController {

    async index(req: Request, res: Response) {
        const orphanagesRepository = getRepository(Orphanages);
        const orphanage = await orphanagesRepository.find({
            relations: ['images'],
        });
        if (!orphanage)
            return res.status(400).json({
                error: 'Orphanage not found',
            });

        return res.status(201).json({
            Status: 'Okay',
            Orphanages: OrphanagesView.RenderMany(orphanage),
        });
    }

    async create(req: Request, res: Response) {
        const {
            latitude,
            longitude,
            name,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        } = req.body;

        const orphanagesRepository = getRepository(Orphanages);

        const reqImages = req.files as Express.Multer.File[];

        const images = reqImages.map(images => {
            return { path: images.filename }
        })

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images,
        }

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required(),
                })
            )
        });

        await schema.validate(data, {
            abortEarly: false,
        });


        const orphanage = orphanagesRepository.create(data);
        await orphanagesRepository.save(orphanage);

        return res.status(201).json({
            Status: 'Okay, datas inserts to orphanage table',
            orphanage,
        });
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;
        const orphanagesRepository = getRepository(Orphanages);
        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images'],
        });

        if (!orphanage)
            return res.status(400).json({
                error: 'Orphanage not found',
            });


        return res.status(201).json({
            Status: 'Okay',
            orphanage: OrphanagesView.Render(orphanage),
        });
    }

    async update(req: Request, res: Response) {

    }

    async delete(req: Request, res: Response) {

    }
}