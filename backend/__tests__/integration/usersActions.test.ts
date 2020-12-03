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
    describe('PUT Accept pending users', () => {
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

    describe('DELETE Reject pending users', () => {
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
