import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import bcrypt from 'bcrypt';
@Entity('users')
export default class {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    status: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
    hasPassword() {
        this.password = bcrypt.hashSync(this.password, 10);
    }

}