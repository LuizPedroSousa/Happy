import express from 'express';
import OrphanagesController from './Controllers/orphanagesController';
import multer from 'multer';
import multerCfg from './Configs/upload';
import UserController from './Controllers/usersController';
import auth from './Middlewares/auth';

const Router = express.Router();

const upload = multer(multerCfg);

Router.get('/orphanages', OrphanagesController.index);
Router.get('/orphanages/show/:id', OrphanagesController.show);
Router.post('/orphanages/create', upload.array('images'), OrphanagesController.create);

Router.get('/users', auth, UserController.index);
Router.post('/users/create', UserController.create);
Router.get('/users/auth', UserController.auth);
Router.put('/users/accept/:id', auth, UserController.acceptUser);

export { Router };