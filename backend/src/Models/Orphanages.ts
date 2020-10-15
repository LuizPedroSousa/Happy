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
    about: number;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;


    @OneToMany(() => Image, Image => Image.orphanage)
    @JoinColumn({name: 'orphanage_id'})
    images: Image[];
}