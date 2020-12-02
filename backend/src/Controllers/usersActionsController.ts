import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Users from '../Models/Users';
import UsersView from '../Views/Users_view';
interface IFilters{
    status?: number;
    name?: string;
    surname?: string;
}

class UserActionsController {
    async index (req: Request, res: Response) {
        const filters = req.query as IFilters;
        const usersRepository = getRepository(Users);

        const users = await usersRepository.find(
            filters
                ? {
                    relations: ['image'],
                    where: filters
                }
                : { relations: ['image'] });

        if (!users) {
            return res.status(400).json({
                error: 'users not found'
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
                error: 'User not found'
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

        const user = await userRepository.findOneOrFail(id, { relations: ['image'] });

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
