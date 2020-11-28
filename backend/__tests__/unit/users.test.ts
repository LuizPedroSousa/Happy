/* eslint-disable no-undef */
import Users from '../../src/Models/Users';
import { uuid } from 'uuidv4';
import bcrypt from 'bcrypt';
import { UserUnitFactory } from '../Utils/factories';
import typeorm = require('typeorm');
describe('Users', () => {
    describe('Create', () => {
        it('should return true, when encrypted password', async () => {
            typeorm.getRepository = jest.fn().mockReturnValue({
                save: jest.fn((User: Users) => ({
                    id: uuid(),
                    name: User.name,
                    surname: User.surname,
                    email: User.email,
                    password: bcrypt.hashSync(User.password, 10)
                }))
            });

            const { password } = await typeorm.getRepository(Users).save(UserUnitFactory);

            expect(await bcrypt.compare('1234', password)).toBe(true);
        });
    });
});
