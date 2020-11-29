import { getRepository } from 'typeorm';
import { Request, Response, Express } from 'express';
import Users from '../Models/Users';
import UsersView from '../Views/Users_view';
import bcrypt from 'bcrypt';
import * as Yup from 'yup';
import { transport } from '../Modules/mailer';
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
            name,
            surname,
            email,
            password
        } = req.body;

        const usersRepository = getRepository(Users);

        const reqImage = req.file as Express.Multer.File;

        const image = reqImage ? { path: reqImage.filename } : { path: '' };
        const data = {
            status: true,
            name,
            surname,
            email,
            password,
            image
        };

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            surname: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required(),
            image: Yup.object().shape({
                path: Yup.string().notRequired()
            }).required()
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

        return res.status(201).json({
            user: UsersView.render(user)
        });
    }

    async auth (req: Request, res: Response) {
        const { email, password } = req.body;

        const userRepository = getRepository(Users);

        const user = await userRepository.findOne({
            relations: ['image'],
            where: { email }
        });

        if (!user) {
            return res.status(401).json({
                error: 'Invalid email'
            });
        };

        if (!await bcrypt.compare(password, user.password)) {
            return res.status(401).json({
                error: 'Invalid password'
            });
        }

        if (!user.status) {
            return res.status(401).json({
                error: 'your account is being reviewed by one of our admins'
            });
        }

        return res.status(201).json({
            user: UsersView.render(user),
            token: user.generateToken()
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
