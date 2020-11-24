import { MigrationInterface, QueryRunner, Table } from 'typeorm';

// tslint:disable-next-line: class-name
export class userImages1605250938891 implements MigrationInterface {
    public async up (queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'user_images',
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
                    name: 'user_id',
                    type: 'varchar'
                }
            ],
            foreignKeys: [
                {
                    name: 'ImageUser',
                    columnNames: ['user_id'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }));
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user_images');
    }
}
