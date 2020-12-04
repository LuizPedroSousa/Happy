/* eslint-disable no-undef */
import { UserFactoryCreate } from '../Utils/factories';
import req from 'supertest';
import app from '../../src/app';
import { createConnection } from 'typeorm';
import clearData from '../Utils/clearData';

beforeAll(async () => {
    await createConnection();
});

beforeEach(async () => {
    await clearData();
});

describe('Users admin actions', () => {
    describe('Index', () => {
        it('should return a status 201, when find all users without a query', async () => {
            const { token } = await UserFactoryCreate();
            await UserFactoryCreate({ status: false });
            await UserFactoryCreate({ status: false });
            const res = await req(app)
                .get('/users/admin')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(201);
            expect(res.body.users).toHaveLength(2);
        });

        it('should return a status 400, when not found any users without a query', async () => {
            const { token } = await UserFactoryCreate();

            const res = await req(app)
                .get('/users/admin')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'Unable to resolve this: Users not found');
        });

        it('should return a status 201, when find user with a full query', async () => {
            const { token } = await UserFactoryCreate();

            const { name, surname } = await UserFactoryCreate({ status: false });

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
                    status: false,
                    name: 'Luiz',
                    surname: 'Pedro'
                })
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'Unable to resolve this: Users not found');
        });

        it('should return a status 201, when find user with query by name', async () => {
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

    describe('Accept', () => {
        it('should return a status 201, when accept user with a valid id', async () => {
            const { token } = await UserFactoryCreate();
            const { id } = await UserFactoryCreate({ status: false });

            const res = await req(app)
                .put(`/users/admin/accept/${id}`)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(201);
        });

        it('should return a status 404, when user id is invalid', async () => {
            const { token } = await UserFactoryCreate();

            const res = await req(app)
                .put('/users/admin/accept/1234')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(404);
            expect(res.body).toHaveProperty('error', 'Unable to resolve this action: User not found');
        });

        it('should return a status 400, when user are admin', async () => {
            const { id, token } = await UserFactoryCreate();
            const res = await req(app)
                .put(`/users/admin/accept/${id}`)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'You dont complete this: user are admin');
        });
    });

    describe('Reject', () => {
        it('should return a status 201, when reject user with a valid id', async () => {
            const { token } = await UserFactoryCreate();
            const { id } = await UserFactoryCreate({ status: false });

            const res = await req(app)
                .delete(`/users/admin/reject/${id}`)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(201);
        });

        it('should return a status 404, when user id is invalid', async () => {
            const { token } = await UserFactoryCreate();

            const res = await req(app)
                .delete('/users/admin/reject/1234')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(404);
            expect(res.body).toHaveProperty('error', 'Unable to resolve this action: User not found');
        });

        it('should return a status 400, when user are admin', async () => {
            const { id, token } = await UserFactoryCreate();
            const res = await req(app)
                .delete(`/users/admin/reject/${id}`)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'You dont complete this: user are admin');
        });
    });
});
