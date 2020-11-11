import jwt from 'jsonwebtoken';

interface IParams {
    id: number;
}


const PrivateKey = JSON.stringify(process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'))

export default function generateToken(params: IParams) {
    return jwt.sign(params, JSON.parse(PrivateKey), {
        expiresIn: 3600,
        algorithm: 'RS256',
    });
}