import { MigrationInterface, QueryRunner, Table } from 'typeorm';

// tslint:disable-next-line: class-name
export class users1604726781529 implements MigrationInterface {
    public async up (queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true
                },
                {
                    name: 'status',
                    type: 'boolean',
                    default: false
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'surname',
                    type: 'varchar'
                },
                {
                    name: 'email',
                    isUnique: true,
                    type: 'varchar'
                },
                {
                    name: 'password',
                    type: 'text'
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP'
                }
            ]
        }));
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
