import { MigrationInterface, QueryRunner } from "typeorm";

export class removedPasswordContact1679601742933 implements MigrationInterface {
    name = 'removedPasswordContact1679601742933'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "password" character varying(150) NOT NULL`);
    }

}
