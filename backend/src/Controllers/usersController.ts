import { getRepository } from 'typeorm';
import { Request, Response, Express } from 'express';
import Users from '../Models/Users';
import UsersView from '../Views/Users_view';
import bcrypt from 'bcrypt';
import * as Yup from 'yup';
import { transport } from '../Modules/mailer';
import generateToken from '../Utils/generateToken';
import * as dotenv from 'dotenv';
dotenv.config();
export interface IMail {
    to: string;
    from: string;
    template: string;
    subject: string;
    context: object;
}

class UserController {
    async create (req: Request, res: Response) {
        const {
            status,
            name,
            surname,
            email,
            password
        } = req.body;

        const usersRepository = getRepository(Users);

        const reqImage = req.files as Express.Multer.File[];

        const { path } = reqImage.map(img => {
            return { path: img.filename };
        })[0] || [];

        const image = { path };

        const data = {
            status: status === 'true',
            name,
            surname,
            email,
            password,
            image
        };

        const schema = Yup.object().shape({
            status: Yup.boolean().notRequired(),
            name: Yup.string().required(),
            surname: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required(),
            image: Yup.object().shape({
                path: Yup.string().notRequired()
            })
        });

        await schema.validate(data, {
            abortEarly: false
        });

        const usersAdmin = await usersRepository.find({
            relations: ['image'],
            where: { status: true }
        });

        const user = usersRepository.create(data);
        await usersRepository.save(user);

        if (usersAdmin) {
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
                    id: user.id
                }
            } as IMail, err => {
                if (err) {
                    return res.status(400).json({
                        error: 'Failed to send email to admins'
                    });
                }
            }));
        }

        return res.status(201).json({
            user: UsersView.render(user)
        });
    }

    async auth (req: Request, res: Response) {
        const { email, password } = req.body;

        const userRepository = getRepository(Users);

        const user = await userRepository.findOneOrFail({
            relations: ['image'],
            where: { email }
        });

        if (!await bcrypt.compare(password, user.password)) {
            return res.status(400).json({
                error: 'Invalid password'
            });
        }

        if (!user.status) {
            return res.status(400).json({
                error: 'your account is being reviewed by one of our admins'
            });
        }

        return res.status(201).json({
            user: UsersView.render(user),
            token: generateToken({ id: user.id })
        });
    }

    async show (req: Request, res: Response) {
        const payload = req.userId;

        const userRepository = getRepository(Users);

        const user = await userRepository.findOneOrFail(payload, { relations: ['image'] });

        return res.status(201).json({
            user: UsersView.render(user)
        });
    }

    async update (req: Request, res: Response) {
        const payload = req.userId;

        const {
            name,
            surname,
            email
        } = req.body;

        const userRepository = getRepository(Users);

        const user = await userRepository.findOneOrFail(payload, { relations: ['image'] });

        const reqFile = req.files as Express.Multer.File[];

        const { path } = reqFile.map(img => {
            return { path: img.filename };
        })[0] || [];

        const image = {
            id: user.image.id,
            path: path || user.image.path
        };

        const data = {
            id: payload,
            name: name || user.name,
            surname: surname || user.surname,
            email: email || user.email,
            image
        };

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            surname: Yup.string().required(),
            email: Yup.string().required().email()

        });

        await schema.validate(data, {
            abortEarly: false
        });

        await userRepository.save(data);

        const userUpdated = await userRepository.findOneOrFail(payload, { relations: ['image'] });

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
                email: userUpdated.email
            }
        }as IMail, err => {
            if (err) {
                return res.status(400).json({
                    error: 'Failed to send mail for user'
                });
            }
        });

        return res.status(201).json({
            user: UsersView.render(userUpdated)
        });
    }
}

export default new UserController();
