import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanages from '../Models/Orphanages';


export default class orphanagesController {

    async index(req: Request, res: Response) {
        const orphanagesRepository = getRepository(Orphanages);
        const orphanage = await orphanagesRepository.find();
        if (!orphanage)
            return res.status(400).json({
                error: 'Orphanage not found',
            });
        return res.status(201).json({
            Status: 'Okay',
            orphanage,
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
        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        });
        try {
            await orphanagesRepository.save(orphanage);

            return res.status(201).json({
                Status: 'Okay, datas inserts to orphanage table',
                orphanage,
            });
        } catch (error) {
            return res.status(400).json({
                error: 'Failed to insert datas in orphanage'
            });
        }
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;
        const orphanagesRepository = getRepository(Orphanages);
        const orphanage = await orphanagesRepository.findOneOrFail(id);

        if(!orphanage)
            return res.status(400).json({
                error: 'Orphanage not found',
            });

        return res.status(201).json({
            Status: 'Okay',
            orphanage
        });
    }

    async update(req: Request, res: Response) {

    }

    async delete(req: Request, res: Response) {

    }
}