/* eslint-disable no-undef */
import { createConnection } from 'typeorm';
import app from '../../src/app';
import req from 'supertest';
import clearData from '../Utils/clearData';
import path from 'path';
import { UserFactory, UserFactoryCreate, UserUpdateFactory } from '../Utils/factories';
const userImage = path.join(__dirname, '..', './Images', '/Users', '/personal-user-illustration-@2x.png');
const updatedUserImage = path.join(__dirname, '..', './Images', '/Users', '/update_profile.jpg');
beforeAll(async () => {
    await createConnection();
});

beforeEach(async () => {
    await clearData();
});
describe('User profile actions', () => {
    describe('Index', () => {
        it('should return a status 201, when try to find all users', async () => {
            const { token } = await UserFactoryCreate();
            await UserFactoryCreate();
            await UserFactoryCreate();
            const res = await req(app)
                .get('/users/admin')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(201);
            expect(res.body.users).toHaveLength(2);
        });

        it('should return a status 400, when not found any users', async () => {
            const { token } = await UserFactoryCreate();

            const res = await req(app)
                .get('/users/admin')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'Unable to resolve this: Users not found');
        });

        it('should return a status 201, when try to find a user with a full query', async () => {
            const { token } = await UserFactoryCreate();

            const { name, surname } = await UserFactoryCreate();

            const res = await req(app)
                .get('/users/admin')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .query({
                    status: false,
                    name: name.substr(0, 1), // test SQL operator Like
                    surname: surname.substr(0, 3)// test SQL operator Like
                })
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(201);
        });

        it('should return a status 400, when not found any users with a full query', async () => {
            const { token } = await UserFactoryCreate();

            const res = await req(app)
                .get('/users/admin')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .query({
                    name: 'Luiz',
                    surname: 'Pedro'
                })
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'Unable to resolve this: Users not found');
        });

        it('should return a status 201, when find a user with query by name', async () => {
            const { token } = await UserFactoryCreate();

            const { name } = await UserFactoryCreate();

            const res = await req(app)
                .get('/users/admin')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .query({ name: name.substr(0, 2) })// test SQL operator Like
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(201);
        });

        it('should return a status 400, when not found any users with a query by name', async () => {
            const { token } = await UserFactoryCreate();

            const res = await req(app)
                .get('/users/admin')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .query({
                    name: 'Luiz'
                })
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'Unable to resolve this: Users not found');
        });

        it('should return a status 201, when find user with a query by surname', async () => {
            const { token } = await UserFactoryCreate();

            const { surname } = await UserFactoryCreate();

            const res = await req(app)
                .get('/users/admin')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .query({ surname: surname.substr(0, 4) }) // test SQL operator Like
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(201);
        });

        it('should return a status 400, when not found any users with a query by surname', async () => {
            const { token } = await UserFactoryCreate();

            const res = await req(app)
                .get('/users/admin')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .query({
                    surname: 'Pedro'
                })
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'Unable to resolve this: Users not found');
        });
    });

    describe('Create', () => {
        it('should return a status 201 when creating an account with valid credentials', async () => {
            const user = UserFactory.build();

            const res = await req(app)
                .post('/users/create')
                .expect('Content-Type', 'application/json; charset=utf-8')
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
                .expect('Content-Type', 'application/json; charset=utf-8')
                .send(user);

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'Validations errors');
        });

        it('should return a 201 status when creating an account with a user image', async () => {
            const user = JSON.stringify(UserFactory.build({ image: undefined }));

            const res = await req(app)
                .post('/users/create')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .field(JSON.parse(user))
                .attach('image', userImage);

            expect(res.status).toBe(201);
        });
    });
    describe('Authenticate', () => {
        it('should return a status 201 and a jwt, when users authenticate with valid credentials', async () => {
            const { email, password } = UserFactory.build();
            await UserFactoryCreate({ email, password });

            const res = await req(app)
                .post('/users/auth')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .send({
                    email,
                    password
                });

            expect(res.status).toBe(201);
            expect(res.body).toHaveProperty('token');
        });

        it('should return a 401 status, when the user email is invalid', async () => {
            const { password } = UserFactory.build();
            await UserFactoryCreate({ password });

            const res = await req(app)
                .post('/users/auth')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .send({
                    email: 'luizpedrosousa65gmail.com',
                    password
                });

            expect(res.status).toBe(401);
            expect(res.body).toHaveProperty('error', 'Invalid email');
        });

        it('should return a 401 status, when the user password is invalid', async () => {
            const { email } = await UserFactoryCreate();

            const res = await req(app)
                .post('/users/auth')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .send({
                    email,
                    password: '2316'
                });

            expect(res.status).toBe(401);
            expect(res.body).toHaveProperty('error', 'Invalid password');
        });

        it('should return a 401 status, when the user is not admin', async () => {
            const { email, password } = UserFactory.build();
            await UserFactoryCreate({ email, password, status: false });

            const res = await req(app)
                .post('/users/auth')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .send({
                    email,
                    password
                });

            expect(res.status).toBe(401);
            expect(res.body).toHaveProperty('error', 'your account is being reviewed by one of our admins');
        });
    });

    describe('Access private routes', () => {
        it('should return a 201 status, when users try to access a private route with a valid token', async () => {
            const { token } = await UserFactoryCreate();

            const res = await req(app)
                .get('/users/admin/show')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(201);
        });

        it('should return a token error and a 400 status, when users try to access a private route without a token', async () => {
            const res = await req(app)
                .get('/users/admin/show')
                .expect('Content-Type', 'application/json; charset=utf-8');

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'No token provider');
        });

        it('should return a token error and a 400 status, when users try to access a private route with a bad token', async () => {
            const res = await req(app)
                .get('/users/admin/show')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', 'Bearer1234');

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'Token error');
        });

        it('should return a token error and a 400 status, when users try to access a private route with a malformed token', async () => {
            const res = await req(app)
                .get('/users/admin/show')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', 'bearrer 1234');

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'Token malformated');
        });

        it('should return a token error and a 400 status, when users try to access a private route with a invalid token', async () => {
            const res = await req(app)
                .get('/users/admin/show')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', 'Bearer 1234');

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'Invalid token');
        });
    });

    describe('Update', () => {
        it('should return a 201 status, when updating user with valid credentials', async () => {
            const { token } = await UserFactoryCreate();
            const userUpdated = JSON.stringify(UserUpdateFactory.build());

            const res = await req(app)
                .put('/users/admin/update')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`)
                .field(JSON.parse(userUpdated))
                .attach('image', updatedUserImage);

            expect(res.status).toBe(201);
        });

        it('should return a status 201, when the user only updates the profile image', async () => {
            const { token } = await UserFactoryCreate();

            const res = await req(app)
                .put('/users/admin/update')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`)
                .attach('image', updatedUserImage);

            expect(res.status).toBe(201);
        });

        it('should return a status 201, when the user only updates the data', async () => {
            const { token } = await UserFactoryCreate();
            const userUpdate = UserUpdateFactory.build();
            const res = await req(app)
                .put('/users/admin/update')
                .set('Authorization', `Bearer ${token}`)
                .send(userUpdate);

            expect(res.status).toBe(201);
        });

        it('should return a 400 status, when updating user data with invalid credentials', async () => {
            const { token } = await UserFactoryCreate();

            const userUpdated = UserUpdateFactory.build({
                email: 'luizpedrosousagmail.com'
            });

            const res = await req(app)
                .put('/users/admin/update')
                .set('Authorization', `Bearer ${token}`)
                .send(userUpdated);

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'Validations errors');
        });
    });
});
