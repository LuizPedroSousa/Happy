import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Orphanage from './Orphanages';

@Entity('images')
export default class Images {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Orphanage, Orphanage => Orphanage.images, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'orphanage_id'})
    orphanage: Orphanage;
}