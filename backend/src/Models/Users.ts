import { BeforeInsert, BeforeUpdate, Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import bcrypt from 'bcrypt';
import UserImages from './Users_Images';
import jwt from 'jsonwebtoken';
import { uuid } from 'uuidv4';

@Entity('users')
export default class {
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    status: boolean;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    createdAt: string;

    @BeforeInsert()
    @BeforeUpdate()
    hasPassword () {
        this.password = bcrypt.hashSync(this.password, 10);
    }

    @BeforeInsert()
    generateId () {
        this.id = uuid();
    }

    generateToken () {
        const PrivateKey = JSON.stringify(process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'));

        return jwt.sign({ id: this.id }, JSON.parse(PrivateKey), {
            expiresIn: 3306,
            algorithm: 'RS256'
        });
    }

    @OneToOne(() => UserImages, userImage => userImage.user, {
        cascade: ['insert', 'update']
    })
    image: UserImages;
}
