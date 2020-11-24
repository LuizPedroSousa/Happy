import express, { Application } from 'express';
import 'express-async-errors';
import { Routes } from './routers';
import path from 'path';
import './Database/connection';
import errorHandler from './Errors/handler';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();
class App {
    public express: Application;
    public dotenv;

    constructor () {
        this.express = express();
        this.dotenv = dotenv.config({
            path: process.env.NODE_ENV === 'test' ? '../test.env' : '../dev.env'
        });
        this.Middlewares();
        this.Routes();
        this.express.use(errorHandler);
    }

    Middlewares () {
        this.express.use(cors());
        this.express.use(express.json());
        this.express.use('/Uploads', express.static(path.join(__dirname, '..', 'Uploads')));
    }

    Routes () {
        this.express.use(Routes);
    }
}

export default new App().express;
