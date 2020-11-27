import { createConnection, getRepository } from 'typeorm';
import app from '../../src/app';
import Users from '../../src/Models/Users';
import req from 'supertest';
import clearData from '../Utils/clearData';
import path from 'path';
/* eslint-disable no-undef */
const imageFile = path.join(__dirname, '..', './Images', '/personal-user-illustration-@2x.png');
beforeAll(async () => {
    await createConnection();
});

beforeEach(async () => {
    await clearData();
});
describe('/users', () => {
    describe('Create', () => {
        it('should return a status 201 when creating an account with valid credentials', async () => {
            const data = {
                name: 'luiz',
                surname: 'pedro',
                email: 'luizpedrosousa64@gmail.com',
                password: '1234'
            };

            const res = await req(app)
                .post('/users/create')
                .send(data);

            expect(res.status).toBe(201);
        });

        it('should return a status 400, when creating an account with invalid credentials', async () => {
            const data = {
                surname: 'pedro',
                email: 'luizpedrosousa64gmail.com',
                password: 1234
            };

            const res = await req(app)
                .post('/users/create')
                .send(data);

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'Validations errors');
        });

        it('should return a 201 status when creating an account with a user image', async () => {
            const data = {
                name: 'luiz',
                surname: 'sousa',
                email: 'luizpedrosousa64@gmail.com',
                password: '1234'
            };

            const res = await req(app)
                .post('/users/create')
                .field(data)
                .attach('image', imageFile);

            expect(res.status).toBe(201);
        });
    });
    describe('Authenticate', () => {
        it('should return a status 201, when users authenticate with valid credentials', async () => {
            const userRepository = getRepository(Users);
            const data = {
                status: true,
                name: 'Luiz',
                surname: 'Sousa Lemos',
                email: 'luizpedrosousa64@gmail.com',
                password: '1234',
                image: { path: '' }
            };

            const user = userRepository.create(data);

            await userRepository.save(user);

            const res = await req(app)
                .get('/users/auth')
                .send({
                    email: data.email,
                    password: '1234'
                });

            expect(res.status).toBe(201);
        });

        it('should return a 401 status, when the user email is invalid', async () => {
            const userRepository = getRepository(Users);

            const data = {
                status: true,
                name: 'Luiz',
                surname: 'Sousa Lemos',
                email: 'luizpedrosousa64@gmail.com',
                password: '1234',
                image: { path: '' }
            };

            const user = userRepository.create(data);

            await userRepository.save(user);

            const res = await req(app)
                .get('/users/auth')
                .send({
                    email: 'luizpedrosousa65@gmail.com',
                    password: '1234'
                });

            expect(res.status).toBe(401);
            expect(res.body).toHaveProperty('error', 'Invalid email');
        });

        it('should return a 401 status, when the user password is invalid', async () => {
            const userRepository = getRepository(Users);

            const data = {
                status: true,
                name: 'Luiz',
                surname: 'Sousa Lemos',
                email: 'luizpedrosousa64@gmail.com',
                password: '1234',
                image: { path: '' }
            };

            const user = userRepository.create(data);

            await userRepository.save(user);

            const res = await req(app)
                .get('/users/auth')
                .send({
                    email: user.email,
                    password: '2316'
                });

            expect(res.status).toBe(401);
            expect(res.body).toHaveProperty('error', 'Invalid password');
        });

        it('should return a 401 status, when the user is not admin', async () => {
            const userRepository = getRepository(Users);

            const data = {
                name: 'Luiz',
                surname: 'Sousa Lemos',
                email: 'luizpedrosousa64@gmail.com',
                password: '1234',
                image: { path: '' }
            };

            const user = userRepository.create(data);

            await userRepository.save(user);

            const res = await req(app)
                .get('/users/auth')
                .send({
                    email: user.email,
                    password: data.password
                });

            expect(res.status).toBe(401);
            expect(res.body).toHaveProperty('error', 'your account is being reviewed by one of our admins');
        });

        it('should return a jwt, when users authenticate with valid credentials', async () => {
            const userRepository = getRepository(Users);

            const data = {
                status: true,
                name: 'Luiz',
                surname: 'Sousa Lemos',
                email: 'luizpedrosousa64@gmail.com',
                password: '1234',
                image: { path: '' }
            };

            const user = userRepository.create(data);

            await userRepository.save(user);

            const res = await req(app)
                .get('/users/auth')
                .send({
                    email: 'luizpedrosousa64@gmail.com',
                    password: '1234'
                });

            expect(res.body).toHaveProperty('token');
        });
    });
});
