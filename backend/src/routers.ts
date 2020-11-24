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
// Orphanages
Routes.get('/orphanages', OrphanagesController.index);
Routes.get('/orphanages/show/:id', OrphanagesController.show);
Routes.post('/orphanages/create', uploadOrphanage.array('images'), OrphanagesController.create);

// User flow
Routes.post('/users/create', uploadUser.array('image'), UserController.create);
Routes.get('/users/auth', UserController.auth);
Routes.get('/users/admin/show', auth, UserController.show);
Routes.put('/users/admin/update', auth, uploadUser.array('image'), UserController.update);

// User admin
Routes.get('/users/admin', auth, UserActionsController.index);
Routes.put('/users/admin/accept/:id', auth, UserActionsController.acceptUser);
Routes.delete('/users/admin/reject/:id', auth, UserActionsController.rejectUser);
export { Routes };
