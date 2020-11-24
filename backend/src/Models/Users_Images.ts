import { BeforeInsert, Column, Entity, JoinColumn, OneToOne, PrimaryColumn, BeforeUpdate } from 'typeorm';
import { uuid } from 'uuidv4';
import User from './Users';

@Entity('user_images')
export default class UserImages {
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    path: string;

    @BeforeInsert()
    hasPath () {
        if (!this.path) { this.path = '1605341716749-defaultAvatar.png'; };
    }

    @BeforeInsert()
    @BeforeUpdate()
    generateId () {
        this.id = uuid();
    }

    @OneToOne(() => User, user => user.image, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'user_id' })
    user: User;
}
