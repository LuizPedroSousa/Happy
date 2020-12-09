import { Router } from 'express';

import OrphanagesController from './Controllers/orphanagesController';
import UserActionsController from './Controllers/usersActionsController';
import UserController from './Controllers/usersController';

import auth from './Middlewares/auth';

import multer from 'multer';
import multerOrpCfg from './Configs/orphanageUpload';
import multerUserConfig from './Configs/userUpload';
const Routes = Router();

const uploadOrphanage = multer(multerOrpCfg);
const uploadUser = multer(multerUserConfig);

// Orphanage flow
Routes.get('/orphanages', OrphanagesController.index);
Routes.get('/orphanages/show/:id', OrphanagesController.show);
Routes.post('/orphanages/create', uploadOrphanage.array('images'), OrphanagesController.create);

// User flow
Routes.post('/users/create', uploadUser.single('image'), UserController.create);
Routes.get('/users/auth', UserController.auth);
Routes.get('/users/admin', auth, UserController.index);
Routes.get('/users/admin/show', auth, UserController.show);
Routes.put('/users/admin/update', auth, uploadUser.single('image'), UserController.update);

// User admin actions
Routes.put('/users/admin/accept/user/:id', auth, UserActionsController.acceptUser);
Routes.put('/users/admin/accept/orphanage/:id', auth, UserActionsController.acceptOrphanage);
Routes.put('/users/admin/update/orphanage/:id', auth, uploadOrphanage.array('images'), UserActionsController.updateOrphanage);
Routes.delete('/users/admin/reject/user/:id', auth, UserActionsController.rejectUser);
Routes.delete('/users/admin/reject/orphanage/:id', auth, UserActionsController.rejectOrphanage);
export { Routes };
