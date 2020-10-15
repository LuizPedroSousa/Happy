import express from 'express';
import orphanagesController from './Controllers/orphanagesController';
import multer from 'multer';
import multerCfg from './Configs/upload';


const OrphanagesController = new orphanagesController();
const Router = express.Router();

const upload = multer(multerCfg);

Router.get('/orphanages', OrphanagesController.index);
Router.get('/orphanages/show/:id', OrphanagesController.show);
Router.post('/orphanages/create',upload.array('images'), OrphanagesController.create);

export { Router };