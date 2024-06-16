import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1718453953300 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `CREATE TABLE "user" (
                id uuid NOT NULL DEFAULT uuid_generate_v4(),
                username varchar(256) NOT NULL,
                password varchar(256) NOT NULL,
                "createdAt" timestamp NOT NULL DEFAULT now(),
                "updatedAt" timestamp NOT NULL DEFAULT now(),
                CONSTRAINT user_pk_id PRIMARY KEY (id),
                CONSTRAINT user_un_username UNIQUE (username)
            );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS user;`);
  }
}
