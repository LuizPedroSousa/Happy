import path from 'path';
import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';

import * as dotenv from 'dotenv';

dotenv.config({
    path: process.env.NODE_ENV === 'test'
        ? path.join(__dirname, '..', '..', './test.env')
        : path.join(__dirname, '..', '..', './dev.env')
});

export const transport = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: Number(process.env.NODEMAILER_PORT),
    auth: {
        user: process.env.NODEMAILER_DEFAULT_USER,
        pass: process.env.NODEMAILER_DEFAULT_PASSWORD
    }
});

transport.use('compile', hbs({
    viewEngine: {
        defaultLayout: undefined,
        partialsDir: path.resolve('./src/Resources/mail/')
    },
    viewPath: path.resolve('./src/Resources/mail/'),
    extName: '.html'
}));
