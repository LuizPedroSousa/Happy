import { createConnection, getConnection } from 'typeorm';
import clearData from '../Utils/clearData';
import req from 'supertest';
import app from '../../src/app';
import { OrphanageFactory } from '../Utils/factories';
/* eslint-disable no-undef */

beforeAll(async () => {
    await createConnection();
});

beforeEach(async () => {
    await clearData();
});

afterAll(async () => {
    await getConnection().close();
});

describe('/orphanages', () => {
    describe('Create', () => {
        it('should return a status 201, when create a orphanage with valid credentials', async () => {
            const orphanage = OrphanageFactory.build();
            const res = await req(app)
                .post('/orphanages/create')
                .send(orphanage);

            expect(res.status).toBe(201);
        });

        it('should return a status 500, when create a orphanage with invalid credentials', async () => {
            const orphanage = OrphanageFactory.build({
                name: undefined
            });
            const res = await req(app)
                .post('/orphanages/create')
                .send(orphanage);

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('error', 'Validations errors');
        });
    });

    describe('Index', () => {
        it('should return a status 201, when all orphanages are found', async () => {
            await OrphanageFactory.create();

            const res = await req(app)
                .get('/orphanages');

            expect(res.status).toBe(201);
            expect(res.body).toHaveProperty('Orphanages');
        });

        it('should return a status 400, when no orphanages is found', async () => {
            const res = await req(app)
                .get('/orphanages');

            expect(res.status).toBe(400);
        });
    });

    describe('Show', () => {
        it('should return a status 201 when the orphanage with the reference id is found', async () => {
            const orphanage = await OrphanageFactory.create();

            const res = await req(app)
                .get(`/orphanages/show/${orphanage.id}`);

            expect(res.status).toBe(201);
            expect(res.body).toHaveProperty('orphanage');
        });

        it('should return a status 500, when the orphanage with the reference id is not found', async () => {
            const res = await req(app)
                .get('/orphanages/show/1234');

            expect(res.status).toBe(500);
        });
    });
});
