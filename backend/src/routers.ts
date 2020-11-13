import express from 'express';
import OrphanagesController from './Controllers/orphanagesController';
import multer from 'multer';
import multerCfg from './Configs/upload';
import UserController from './Controllers/usersController';
import auth from './Middlewares/auth';
import UserAdminController from './Controllers/usersAdminController';

const Router = express.Router();

const upload = multer(multerCfg);

// Orphanages
Router.get('/orphanages', OrphanagesController.index);
Router.get('/orphanages/show/:id', OrphanagesController.show);
Router.post('/orphanages/create', upload.array('images'), OrphanagesController.create);

// User flow
Router.post('/users/create', UserController.create);
Router.get('/users/auth', UserController.auth);
Router.get('/users/admin/show', auth, UserController.show);
Router.put('/users/admin/update', auth, UserController.update);

// User admin
Router.get('/users/admin', auth, UserAdminController.index);
Router.put('/users/admin/accept/:id', auth, UserAdminController.acceptUser);
Router.delete('/users/admin/reject/:id', auth, UserAdminController.rejectUser);
export { Router };
