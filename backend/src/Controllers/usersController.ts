import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import Users from '../Models/Users';
import UsersView from '../Views/Users_view';
import bcrypt from 'bcrypt';
import * as Yup from 'yup';
export default class userController {


    async index(req: Request, res: Response) {
        const usersRepository = getRepository(Users);
        const users = await usersRepository.find();

        if (users)
            return res.status(400).json({
                error: 'users not found',
            });

        return res.status(201).json({
            users: UsersView.render,
        });
    }

    async show(req: Request, res: Response) {

    }

    async create(req: Request, res: Response) {
        const {
            name,
            surname,
            email,
            password,
        } = req.body;

        const data = {
            name,
            surname,
            email,
            password: await bcrypt.hash(password, 10),
        }

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            surname: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required(),
        });

        await schema.validate(data, {
            abortEarly: true,
        });

        
        
        const usersRepository = getRepository(Users);
        const user = usersRepository.create(data);
        await usersRepository.save(user);

        return res.status(201).json({
            user: UsersView.render(user),
        });

    }

    async update(req: Request, res: Response) {

    }

    async delete(req: Request, res: Response) {

    }
}