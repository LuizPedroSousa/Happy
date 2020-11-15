import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, OneToOne, PrimaryColumn, OneToMany } from 'typeorm';
import bcrypt from 'bcrypt';
import UserImages from './Users_Images';

import {uuid}from 'uuidv4'

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
    hasPassword() {
        this.password = bcrypt.hashSync(this.password, 10);
    }

    @BeforeInsert()
    generateId(){
        this.id = uuid();
    }

    @OneToOne(() => UserImages, userImage => userImage.user, {
        cascade: ['insert', 'update'],
    })
    image: UserImages;
}
