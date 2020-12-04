import { Request, Response } from 'express';
import { getRepository, Like, Not } from 'typeorm';
import Users from '../Models/Users';
import UsersView from '../Views/Users_view';
interface IFilters{
    status?: number;
    name?: string;
    surname?: string;
}

class UserActionsController {
    async index (req: Request, res: Response) {
        const usersRepository = getRepository(Users);

        const payload = req.userId;
        const filters = req.query as IFilters;

        const { name, surname } = filters;

        const users = await usersRepository.find({
            where: [
                {
                    id: Not(payload),
                    ...filters
                },
                {
                    id: Not(payload),
                    ...filters,
                    name: Like(`%${name}%`),
                    surname: Like(`%${surname}%`)
                },
                {
                    id: Not(payload),
                    ...filters,
                    name: Like(`%${name}%`)
                },
                {
                    id: Not(payload),
                    ...filters,
                    surname: Like(`%${surname}%`)
                }
            ],
            relations: ['image'],
            order: {
                createdAt: 'DESC',
                name: 'ASC'
            }
        });

        if (!users[0]) {
            return res.status(400).json({
                error: 'Unable to resolve this: Users not found'
            });
        }

        return res.status(201).json({
            users: UsersView.renderMany(users)
        });
    }

    async acceptUser (req: Request, res: Response) {
        const { id } = req.params;

        const userRepository = getRepository(Users);

        const user = await userRepository.findOne(id, { relations: ['image'] });

        if (!user) {
            return res.status(404).json({
                error: 'Unable to resolve this action: User not found'
            });
        };

        if (user.status) {
            return res.status(400).json({
                error: 'You dont complete this: user are admin'
            });
        }

        await userRepository.update(id, { status: true });

        const userUpdated = await userRepository.findOneOrFail(id, { relations: ['image'] });

        return res.status(201).json({
            user: UsersView.render(userUpdated)
        });
    }

    async rejectUser (req: Request, res: Response) {
        const { id } = req.params;

        const userRepository = getRepository(Users);

        const user = await userRepository.findOne(id, { relations: ['image'] });

        if (!user) {
            return res.status(404).json({
                error: 'Unable to resolve this action: User not found'
            });
        }

        if (user.status) {
            return res.status(400).json({
                error: 'You dont complete this: user are admin'
            });
        }

        await userRepository.delete(id);

        return res.status(201).json({
            Okay: 'User rejected with successfully',
            user: UsersView.render(user)
        });
    }
}

export default new UserActionsController();
