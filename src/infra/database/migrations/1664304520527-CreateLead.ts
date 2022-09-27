import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateLead1664304520527 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'leads',
                columns: [
                    {
                        name: 'lead_id',
                        type: 'uuid',
                        isPrimary: true,                        
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'email',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },

                ],                
            })
        )
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
