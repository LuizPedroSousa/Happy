import express from 'express';
import { Router } from './routers';

const App = express();

App.use(express.json());
App.use(Router);

export { App };

