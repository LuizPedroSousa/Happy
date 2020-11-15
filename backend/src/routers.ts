import express from 'express';

import OrphanagesController from './Controllers/orphanagesController';
import UserActionsController from './Controllers/usersActionsController';
import UserController from './Controllers/usersController';

import auth from './Middlewares/auth';

import multer from 'multer';
import multerOrpCfg from './Configs/orphanageUpload';
import multerUserConfig from './Configs/userUpload';
const Router = express.Router();

const uploadOrphanage = multer(multerOrpCfg);
const uploadUser = multer(multerUserConfig);
// Orphanages
Router.get('/orphanages', OrphanagesController.index);
Router.get('/orphanages/show/:id', OrphanagesController.show);
Router.post('/orphanages/create', uploadOrphanage.array('images'), OrphanagesController.create);

// User flow
Router.post('/users/create',uploadUser.array('image') , UserController.create);
Router.get('/users/auth', UserController.auth);
Router.get('/users/admin/show', auth, UserController.show);
Router.put('/users/admin/update', auth, uploadUser.array('image'), UserController.update);

// User admin
Router.get('/users/admin', auth, UserActionsController.index);
Router.put('/users/admin/accept/:id', auth, UserActionsController.acceptUser);
Router.delete('/users/admin/reject/:id', auth, UserActionsController.rejectUser);
export { Router };
