import express from 'express';

import orphanagesController from './Controllers/orphanagesController';

const OrphanagesController = new orphanagesController();
const Router = express.Router();


Router.get('/orphanages', OrphanagesController.index);
Router.get('/orphanages/show/:id', OrphanagesController.show);
Router.post('/orphanages/create', OrphanagesController.create);

export { Router };