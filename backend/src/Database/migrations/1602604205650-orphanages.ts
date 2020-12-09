import { MigrationInterface, QueryRunner, Table } from 'typeorm';

// tslint:disable-next-line: class-name
export class orphanages1602604205650 implements MigrationInterface {
    public async up (queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'status',
                    type: 'boolean',
                    default: false
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    precision: 10,
                    scale: 7,
                    isUnique: true
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    precision: 10,
                    scale: 7,
                    isUnique: true
                },
                {
                    name: 'about',
                    type: 'text'
                },
                {
                    name: 'whatsapp',
                    type: 'varchar'
                },
                {
                    name: 'instructions',
                    type: 'text'
                },
                {
                    name: 'opening_hours',
                    type: 'varchar'
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false
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
        await queryRunner.dropTable('orphanages');
    }
}
