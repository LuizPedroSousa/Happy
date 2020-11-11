import { Request } from 'express';
declare module 'express' {
    interface IRequest extends Request {
        userId?: string;
    }
}