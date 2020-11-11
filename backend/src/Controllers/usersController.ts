import { getRepository } from 'typeorm';
import { IRequest, Request, Response } from 'express';
import Users from '../Models/Users';
import UsersView from '../Views/Users_view';
import bcrypt from 'bcrypt';
import * as Yup from 'yup';
import { transport } from '../Modules/mailer';
import generateToken from '../Utils/generateToken';

interface IMail {
    to: string;
    from: string;
    template: string;
    subject: string;
}

class userController {


    async index(req: Request, res: Response) {
        const usersRepository = getRepository(Users);
        const users = await usersRepository.find();

        if (!users)
            return res.status(400).json({
                error: 'users not found',
            });

        return res.status(201).json({
            users: UsersView.renderMany(users),
        });

    }

    async show(req: IRequest, res: Response) {

    }

    async create(req: Request, res: Response) {
        const {
            status,
            name,
            surname,
            email,
            password,
        } = req.body;

        const data = {
            status,
            name,
            surname,
            email,
            password,
        }
        const schema = Yup.object().shape({
            status: Yup.number().notRequired().default(0),
            name: Yup.string().required(),
            surname: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required(),
        });

        await schema.validate(data, {
            abortEarly: true,
        });

        const usersRepository = getRepository(Users);

        const usersAdmin = await usersRepository.find({
            where: { status: 1 },
        });

        const user = usersRepository.create(data);
        await usersRepository.save(user);

        usersAdmin.map((userAdmin) => transport.sendMail({
            from: process.env.NODEMAILER_DEFAULT_USER,
            to: userAdmin.email,
            subject: `Olá ${userAdmin.name}`,
            template: 'create/user',
            context: {
                nameAdmin: userAdmin.name,
                name: user.name,
                surname: user.surname,
                email: user.email,
                id: user.id,
            }
        } as IMail, err => {
            if (err)
                return res.status(400).json({
                    error: 'Failed to send email to admins',
                });
        }));


        return res.status(201).json({
            user: UsersView.render(user),
        });

    }

    async acceptUser(req: Request, res: Response) {
        const { id } = req.params;

        const userRepository = getRepository(Users);

        const user = await userRepository.update(id, { status: 1 });

        if (!user)
            return res.status(400).json({
                error: 'User not found',
            });

        const userUpdated = await userRepository.findOneOrFail(id);

        return res.status(201).json({
            user: UsersView.render(userUpdated),
        });
    }

    async update(req: Request, res: Response) {
    }

    async delete(req: Request, res: Response) {

    }


    async auth(req: Request, res: Response) {
        const { email, password } = req.body;

        const userRepository = getRepository(Users);

        const user = await userRepository.findOneOrFail({ where: { email } });

        if (!user)
            return res.status(400).json({
                error: 'User not found',
            });

        if (!await bcrypt.compare(password, user.password))
            return res.status(400).json({
                error: 'Invalid password',
            });

        if (!user.status)
            return res.status(400).json({
                error: 'your account is being reviewed by one of our admins',
            });

        return res.status(201).json({
            user: UsersView.render(user),
            token: generateToken({ id: user.id }),
        });

    }
}

export default new userController();