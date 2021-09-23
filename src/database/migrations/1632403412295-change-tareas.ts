import {MigrationInterface, QueryRunner} from "typeorm";

export class changeTareas1632403412295 implements MigrationInterface {
    name = 'changeTareas1632403412295'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."tarea" ADD "creation_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "public"."tarea" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."tarea" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "public"."tarea" DROP COLUMN "creation_at"`);
    }

}
