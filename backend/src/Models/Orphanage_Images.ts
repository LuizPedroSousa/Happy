import { uuid } from 'uuidv4';
import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import Orphanage from './Orphanages';

@Entity('orphanage_images')
export default class OrphanageImages {
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    path: string;

    @ManyToOne(() => Orphanage, orphanage => orphanage.images, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'orphanage_id' })
    orphanage: Orphanage;

    @BeforeInsert()
    @BeforeUpdate()
    generateId () {
        this.id = uuid();
    }
}
