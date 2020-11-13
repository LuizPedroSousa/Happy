import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './Images';

@Entity('orphanages')
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    name: string;

    @Column()
    about: string;

    @Column()
    whatsapp: string;

    @Column()
    instructions: string;

    @Column()
    // tslint:disable-next-line: variable-name
    opening_hours: string;

    @Column()
    // tslint:disable-next-line: variable-name
    open_on_weekends: boolean;


    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'orphanage_id' })
    images: Image[];
}
