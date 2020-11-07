import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export default class {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    email: string;

    @Column()
    password: string;
}