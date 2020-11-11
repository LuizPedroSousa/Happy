import { IRequest, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';

export default (req: IRequest, res: Response, next: NextFunction) => {
    const {authorization} = req.headers;

    if (!authorization)
        return res.status(400).json({
            error: 'No token provider',
        });

    const parts = authorization.split(' ');

    if (parts.length < 2)
        return res.status(400).json({
            error: 'Token error',
        });

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme))
        return res.status(400).json({
            error: 'Token malformated',
        });

    const PublicKey = JSON.stringify(process.env.PUBLIC_KEY?.replace(/\\n/g, '\n'))

    jwt.verify(token, JSON.parse(PublicKey), (err: any, decoded: any) => {
        if (err)
            return res.status(400).json({
                error: 'Invalid Token',
            });

        req.userId = decoded.id;
        return next();
    });

}