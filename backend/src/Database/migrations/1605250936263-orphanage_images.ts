import { MigrationInterface, QueryRunner, Table } from 'typeorm';

// tslint:disable-next-line: class-name
export class orphanageImages1605250936263 implements MigrationInterface {
    public async up (queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'orphanage_images',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true
                },
                {
                    name: 'path',
                    type: 'varchar'
                },
                {
                    name: 'orphanage_id',
                    type: 'varchar'
                }
            ],
            foreignKeys: [
                {
                    name: 'ImageOrphanage',
                    columnNames: ['orphanage_id'],
                    referencedTableName: 'orphanages',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'

                }
            ]
        }));
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orphanage_images');
    }
}
