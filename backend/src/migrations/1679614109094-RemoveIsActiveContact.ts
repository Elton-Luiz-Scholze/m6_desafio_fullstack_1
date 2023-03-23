import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveIsActiveContact1679614109094 implements MigrationInterface {
    name = 'RemoveIsActiveContact1679614109094'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "isActive"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

}
