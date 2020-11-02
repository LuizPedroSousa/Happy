import express from 'express';
import 'express-async-errors';
import { Router } from './routers';
import path from 'path';
import './Database/connection';
import errorHandler from './Errors/handler';
import cors from 'cors';

const App = express();

App.use(cors());
App.use(express.json());
App.use(Router);
App.use('/Uploads', express.static(path.join(__dirname, '..', 'Uploads')))
App.use(errorHandler)

export { App };