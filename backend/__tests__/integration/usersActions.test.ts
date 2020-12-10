/* eslint-disable no-undef */
import { OrphanageFactory, UserFactoryCreate } from '../Utils/factories';
import req from 'supertest';
import app from '../../src/app';
import { createConnection } from 'typeorm';
import clearData from '../Utils/clearData';
import path from 'path';
const orphanageImage = path.join(__dirname, '..', './Images', '/Orphanages', '/orfanato.jpg');
beforeAll(async () => {
    await createConnection();
});

beforeEach(async () => {
    await clearData();
});

describe('Users admin actions', () => {
    describe('Accept pending users', () => {
        it('should return a status 201, when try to accept a user with a valid id', async () => {
            const { token } = await UserFactoryCreate();
            const { id } = await UserFactoryCreate({ status: false });

            const res = await req(app)
                .put(`/users/admin/accept/user/${id}`)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(201);
        });

        it('should return a status 404, when try to accept a user with an invalid id', async () => {
            const { token } = await UserFactoryCreate();

            const res = await req(app)
                .put('/users/admin/accept/user/1234')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(404);
            expect(res.body).toHaveProperty('error', 'Unable to resolve this: User not found');
        });

        it('should return a status 400, when try to accept a user and user are admin', async () => {
            const { id, token } = await UserFactoryCreate();
            const res = await req(app)
                .put(`/users/admin/accept/user/${id}`)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'Unable to resolve this: User are admin');
        });
    });

    describe('Reject pending users', () => {
        it('should return a status 201, when try to reject a user with a valid id', async () => {
            const { token } = await UserFactoryCreate();
            const { id } = await UserFactoryCreate({ status: false });

            const res = await req(app)
                .delete(`/users/admin/reject/user/${id}`)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(201);
            expect(res.body).toHaveProperty('Okay', 'User rejected with successfully');
        });

        it('should return a status 404, when try to reject a user with an invalid id', async () => {
            const { token } = await UserFactoryCreate();

            const res = await req(app)
                .delete('/users/admin/reject/user/1234')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(404);
            expect(res.body).toHaveProperty('error', 'Unable to resolve this: User not found');
        });

        it('should return a status 400, when try to reject a user and user are admin', async () => {
            const { id, token } = await UserFactoryCreate();
            const res = await req(app)
                .delete(`/users/admin/reject/user/${id}`)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'Unable to resolve this: User are admin');
        });
    });

    describe('Accept pending orphanages', () => {
        it('should return a status 201, when try to accept an orphanage with a valid id', async () => {
            const { token } = await UserFactoryCreate();
            const { id } = await OrphanageFactory.create({ status: false });

            const res = await req(app)
                .put(`/users/admin/accept/orphanage/${id}`)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(201);
            expect(res.body.orphanage).toHaveProperty('status', true);
        });

        it('should return a status 404, when try to accept an orphanage with an invalid id', async () => {
            const { token } = await UserFactoryCreate();

            const res = await req(app)
                .put('/users/admin/accept/orphanage/1234')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(404);
            expect(res.body).toHaveProperty('error', 'Unable to resolve this: Orphanage not found');
        });

        it('should return a status 400, when try to accept an orphanage and orphanage is already accepted', async () => {
            const { token } = await UserFactoryCreate();
            const { id } = await OrphanageFactory.create();
            const res = await req(app)
                .put(`/users/admin/accept/orphanage/${id}`)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'Unable to resolve this: Orphanage is already accepted');
        });
    });

    describe('Reject pending orphanage', () => {
        it('should return a status 201, when try to reject an orphanage with a valid id', async () => {
            const { token } = await UserFactoryCreate();
            const { id } = await OrphanageFactory.create({ status: false });

            const res = await req(app)
                .delete(`/users/admin/reject/orphanage/${id}`)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(201);
            expect(res.body).toHaveProperty('Okay', 'Orphanage rejected with successfully');
        });

        it('should return a status 404, when try to reject an orphanage with an invalid id', async () => {
            const { token } = await UserFactoryCreate();

            const res = await req(app)
                .delete('/users/admin/reject/orphanage/1234')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(404);
            expect(res.body).toHaveProperty('error', 'Unable to resolve this: Orphanage not found');
        });

        it('should return a status 400, when try to reject an orphanage and orphanage is already accepted', async () => {
            const { token } = await UserFactoryCreate();
            const { id } = await OrphanageFactory.create();
            const res = await req(app)
                .delete(`/users/admin/reject/orphanage/${id}`)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'Unable to resolve this: Orphanage is already accepted');
        });
    });

    describe('Update orphanage', () => {
        it('should return a status 201, when try to update an orphanage with a valid credentials', async () => {
            const { token } = await UserFactoryCreate();
            const { id } = await OrphanageFactory.create();
            const orphanageData = JSON.stringify(OrphanageFactory.build());

            const res = await req(app)
                .put(`/users/admin/update/orphanage/${id}`)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`)
                .field(JSON.parse(orphanageData))
                .attach('images', orphanageImage);

            expect(res.status).toBe(201);
            expect(res.body).toHaveProperty('Okay', 'Orphanage updated with successfully');
        });

        it('should return a status 201, when try to update an orphanage with an only data', async () => {
            const { token } = await UserFactoryCreate();
            const { id } = await OrphanageFactory.create();
            const orphanageData = JSON.stringify(OrphanageFactory.build());

            const res = await req(app)
                .put(`/users/admin/update/orphanage/${id}`)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`)
                .field(JSON.parse(orphanageData));

            expect(res.status).toBe(201);
            expect(res.body).toHaveProperty('Okay', 'Orphanage updated with successfully');
        });

        it('should return a status 201, when try to update an orphanage with an only images', async () => {
            const { token } = await UserFactoryCreate();
            const { id } = await OrphanageFactory.create();

            const res = await req(app)
                .put(`/users/admin/update/orphanage/${id}`)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`)
                .attach('images', orphanageImage);

            expect(res.status).toBe(201);
            expect(res.body).toHaveProperty('Okay', 'Orphanage updated with successfully');
        });

        it('should return a status 404, when try to update an orphanage with an invalid id', async () => {
            const { token } = await UserFactoryCreate();

            const res = await req(app)
                .put('/users/admin/update/orphanage/1234')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(404);
            expect(res.body).toHaveProperty('error', 'Unable to resolve this: Orphanage not found');
        });

        it('should return a status 400, when try to update an orphanage and this orphanage is pending', async () => {
            const { token } = await UserFactoryCreate();
            const { id } = await OrphanageFactory.create({ status: false });

            const res = await req(app)
                .put(`/users/admin/update/orphanage/${id}`)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'Unable to resolve this: Orphanage is pending');
        });
    });
});
