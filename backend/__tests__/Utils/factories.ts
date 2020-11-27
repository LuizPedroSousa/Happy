import { Factory } from 'typeorm-factory';
import Orphanage from '../../src/Models/Orphanages';
import faker from 'faker';

export const OrphanageFactory = new Factory(Orphanage)
    .sequence('name', () => `${faker.address.streetAddress()}`)
    .sequence('latitude', () => Number(faker.address.latitude()))
    .sequence('longitude', () => Number(faker.address.longitude()))
    .sequence('about', () => String(faker.commerce.productDescription()))
    .sequence('instructions', () => String(faker.commerce.productDescription()))
    .sequence('whatsapp', () => String(faker.phone.phoneFormats()))
    .sequence('opening_hours', () => String(faker.time.recent()))
    .sequence('open_on_weekends', () => faker.random.boolean());
