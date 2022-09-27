import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateIntentions1664308235891 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'intentions',
                columns: [
                    {
                        name: 'intention_id',
                        type: "uuid",
                        isPrimary: true,                        
                    },
                    {
                        name: 'lead_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'zipcode_start',
                        type: 'varchar'
                    },
                    {
                        name: 'zipcode_end',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
                foreignKeys: [
                    {
                        name: 'FKLeadIntetion',
                        referencedTableName: 'leads',
                        referencedColumnNames: ['lead_id'],
                        columnNames: ['lead_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL',
                    }
                ]
                
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('intentions');
    }

}
