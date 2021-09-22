import {MigrationInterface, QueryRunner} from "typeorm";

export class init1632340465936 implements MigrationInterface {
    name = 'init1632340465936'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tarea" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "completed" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_52df0f8fc74f81d0531ad890f0e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tarea"`);
    }

}
