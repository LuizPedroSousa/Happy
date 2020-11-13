import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import Users from '../Models/Users';
import UsersView from '../Views/Users_view';
import bcrypt from 'bcrypt';
import * as Yup from 'yup';
import { transport } from '../Modules/mailer';
import generateToken from '../Utils/generateToken';

export interface IMail {
    to: string;
    from: string;
    template: string;
    subject: string;
    context: object;
}

class UserController {
    async create(req: Request, res: Response) {
        const {
            status,
            name,
            surname,
            email,
            password
        } = req.body;

        const usersRepository = getRepository(Users);

        const data = {
            status,
            name,
            surname,
            email,
            password,
        }
        const schema = Yup.object().shape({
            status: Yup.boolean().notRequired(),
            name: Yup.string().required(),
            surname: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required(),
        });

        await schema.validate(data, {
            abortEarly: true,
        });


        const usersAdmin = await usersRepository.find({
            where: { status: true },
        });

        const user = usersRepository.create(data);
        await usersRepository.save(user);

        usersAdmin.map(userAdmin => transport.sendMail({
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

    async auth(req: Request, res: Response) {
        const { email, password } = req.body;

        const userRepository = getRepository(Users);

        const user = await userRepository.findOneOrFail({ where: { email } });

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

    async show(req: Request, res: Response) {
        const payload = req.userId;

        const userRepository = getRepository(Users);

        const user = await userRepository.findOneOrFail(payload);

        return res.status(201).json({
            user: UsersView.render(user),
        });
    }

    async update(req: Request, res: Response) {
        const payload = req.userId;

        const {
            name,
            surname,
            email,
        } = req.body;

        const userRepository = getRepository(Users);

        const user = await userRepository.findOneOrFail(payload);

        const data = {
            name: name ? name : user.name,
            surname: surname ? surname : user.surname,
            email: email ? email : user.email,
        }


        const schema = Yup.object().shape({
            name: Yup.string().required(),
            surname: Yup.string().required(),
            email: Yup.string().required().email(),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        await userRepository.update(user.id, data);

        const userUpdated = await userRepository.findOneOrFail(payload);

        transport.sendMail({
            from: process.env.NODEMAILER_DEFAULT_USER,
            to: user.email,
            template: 'update/user',
            subject: `Olá ${user.name}`,
            context: {
                id: payload,
                name: user.name,
                updatedName: userUpdated.name,
                surname: userUpdated.surname,
                email: userUpdated.email,
            },
        }as IMail, err => {
            if(err)
                return res.status(400).json({
                    error: 'Failed to send mail for user'
                });
            });


        return res.status(201).json({
            user: UsersView.render(userUpdated),
        });
    }


}

export default new UserController();
