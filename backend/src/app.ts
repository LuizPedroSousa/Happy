import express from 'express';
import { Router } from './routers';
import path from 'path';
import 'express-async-errors';
import './Database/connection';
const App = express();

App.use(express.json());
App.use(Router);
App.use('/Uploads', express.static(path.join(__dirname, '..', 'Uploads')))
export { App };

