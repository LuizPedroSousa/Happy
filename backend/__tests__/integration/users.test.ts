import { createConnection } from 'typeorm';
import app from '../../src/app';
import req from 'supertest';
import clearData from '../Utils/clearData';
import path from 'path';
import { UserFactory } from '../Utils/factories';
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
            const user = UserFactory.build();

            const res = await req(app)
                .post('/users/create')
                .send(user);

            expect(res.status).toBe(201);
        });

        it('should return a status 400, when creating an account with invalid credentials', async () => {
            const user = UserFactory.build({
                password: undefined,
                name: undefined
            });

            const res = await req(app)
                .post('/users/create')
                .send(user);

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'Validations errors');
        });

        it('should return a 201 status when creating an account with a user image', async () => {
            const user = JSON.stringify(UserFactory.build({ image: undefined }));
            const res = await req(app)
                .post('/users/create')
                .field(JSON.parse(user))
                .attach('image', imageFile);

            expect(res.status).toBe(201);
        });
    });
    describe('Authenticate', () => {
        it('should return a status 201, when users authenticate with valid credentials', async () => {
            const user = UserFactory.build();
            await UserFactory.create(user);
            const { email, password } = user;

            const res = await req(app)
                .get('/users/auth')
                .send({
                    email,
                    password
                });
            expect(res.status).toBe(201);
        });

        it('should return a 401 status, when the user email is invalid', async () => {
            const user = UserFactory.build();
            const { password } = user;
            await UserFactory.create(user);

            const res = await req(app)
                .get('/users/auth')
                .send({
                    email: 'luizpedrosousa65gmail.com',
                    password
                });

            expect(res.status).toBe(401);
            expect(res.body).toHaveProperty('error', 'Invalid email');
        });

        it('should return a 401 status, when the user password is invalid', async () => {
            const user = UserFactory.build();
            const { email } = await UserFactory.create(user);

            const res = await req(app)
                .get('/users/auth')
                .send({
                    email,
                    password: '2316'
                });

            expect(res.status).toBe(401);
            expect(res.body).toHaveProperty('error', 'Invalid password');
        });

        it('should return a 401 status, when the user is not admin', async () => {
            const user = UserFactory.build({ status: false });
            await UserFactory.create(user);
            const { email, password } = user;

            const res = await req(app)
                .get('/users/auth')
                .send({
                    email,
                    password
                });

            expect(res.status).toBe(401);
            expect(res.body).toHaveProperty('error', 'your account is being reviewed by one of our admins');
        });

        it('should return a jwt, when users authenticate with valid credentials', async () => {
            const user = UserFactory.build();
            await UserFactory.create(user);
            const { email, password } = user;

            const res = await req(app)
                .get('/users/auth')
                .send({
                    email,
                    password
                });

            expect(res.body).toHaveProperty('token');
        });
    });

    describe('Access private routes', () => {
        it('should return a 201 status, when users try to access a private route with a valid token', async () => {
            const user = UserFactory.build();
            await UserFactory.create(user);

            const { email, password } = user;

            const { body } = await req(app)
                .get('/users/auth')
                .send({ email, password });

            const res = await req(app)
                .get('/users/admin/show')
                .set('Authorization', `Bearer ${body.token}`);

            expect(res.status).toBe(201);
        });

        it('should return a 400 status, when users try to access a private route without a token', async () => {
            const res = await req(app)
                .get('/users/admin/show');

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'No token provider');
        });

        it('should return a token error, when users try to access a private route with a bad token', async () => {
            const user = UserFactory.build();
            await UserFactory.create(user);

            const { email, password } = user;

            const { body } = await req(app)
                .get('/users/auth')
                .send({
                    email,
                    password
                });
            const res = await req(app)
                .get('/users/admin/show')
                .set('Authorization', `Bearer${body.token}`);

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'Token error');
        });

        it('should return a token error, when users try to access a private route with a malformed token', async () => {
            const user = UserFactory.build();
            const { email, password } = user;
            await UserFactory.create(user);

            const { body } = await req(app)
                .get('/users/auth')
                .send({ email, password });

            const res = await req(app)
                .get('/users/admin/show')
                .set('Authorization', `bearrer ${body.token}`);

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'Token malformated');
        });

        it('should return a token error, when users try to access a private route with a invalid token', async () => {
            const res = await req(app)
                .get('/users/admin/show')
                .set('Authorization', 'Bearer 1234');

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'Invalid token');
        });
    });
});
