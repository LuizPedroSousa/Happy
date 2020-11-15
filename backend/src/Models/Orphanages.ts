import { Entity, Column, OneToMany, JoinColumn, BeforeInsert, PrimaryColumn } from 'typeorm';
import OrphanageImage from './Orphanage_Images';
import { uuid } from 'uuidv4';

@Entity('orphanages')
export default class Orphanage {
    @PrimaryColumn('uuid')
    id: string;

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

    @BeforeInsert()
    generateId(){
        this.id = uuid();
    }

    @OneToMany(() => OrphanageImage, image => image.orphanage, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'orphanage_id' })
    images: OrphanageImage[];
}
