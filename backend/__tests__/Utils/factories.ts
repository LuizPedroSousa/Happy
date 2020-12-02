import { Factory } from 'typeorm-factory';
import Orphanage from '../../src/Models/Orphanages';
import faker from 'faker';
import Users from '../../src/Models/Users';
import UserImages from '../../src/Models/Users_Images';

interface IUserFactoryOptions {
    status?: boolean;
    name?: string;
    surname?: string;
    email?: string;
    password?: string;
    hasSendImage?:boolean;
    image?: UserImages
}

export const OrphanageFactory = new Factory(Orphanage)
    .sequence('name', () => `${faker.address.streetAddress()}`)
    .sequence('latitude', () => Number(faker.address.latitude()))
    .sequence('longitude', () => Number(faker.address.longitude()))
    .sequence('about', () => String(faker.commerce.productDescription()))
    .sequence('instructions', () => String(faker.commerce.productDescription()))
    .sequence('whatsapp', () => String(faker.phone.phoneFormats()))
    .sequence('opening_hours', () => String(faker.time.recent()))
    .sequence('open_on_weekends', () => faker.random.boolean());

export const UserFactory = new Factory(Users)
    .sequence('status', () => Boolean(true))
    .sequence('name', () => String(faker.name.firstName()))
    .sequence('surname', () => String(faker.name.lastName()))
    .sequence('email', () => String(faker.internet.email()))
    .sequence('password', () => String(faker.internet.password()))
    .sequence('image', () => Object({ path: '' }));

export const UserUpdateFactory = new Factory(Users)
    .sequence('name', () => faker.name.firstName())
    .sequence('surname', () => faker.name.lastName())
    .sequence('email', () => faker.internet.email());

export const UserFactoryCreate = async (options?: IUserFactoryOptions) => {
    const create = await UserFactory.create(UserFactory.build({ ...options }));
    return {
        ...create,
        token: create.generateToken()
    };
};

export const UserUnitFactory = {
    name: 'Luiz',
    surname: 'Pedro',
    email: 'luizpedrosousa64@gmail.com',
    password: '1234'
};
