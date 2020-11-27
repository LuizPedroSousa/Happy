/* eslint-disable no-undef */
import Users from '../../src/Models/Users';
import { uuid } from 'uuidv4';
import bcrypt from 'bcrypt';
import typeorm = require('typeorm');
describe('Users', () => {
    describe('Create', () => {
        it('should return true, when encrypted password', async () => {
            const data = {
                name: 'Luiz',
                surname: 'Pedro',
                email: 'luizpedrosousa64@gmail.com',
                password: '1234'
            };

            typeorm.getRepository = jest.fn().mockReturnValue({
                save: jest.fn((User: Users) => ({
                    id: uuid(),
                    name: User.name,
                    surname: User.surname,
                    email: User.email,
                    password: bcrypt.hashSync(User.password, 10)
                }))
            });

            const user = await typeorm.getRepository(Users).save(data);

            expect(await bcrypt.compare('1234', user.password)).toBe(true);
        });
    });
});
