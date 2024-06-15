import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1718454019209 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "product" (
                id uuid NOT NULL DEFAULT uuid_generate_v4(),
                nome varchar NOT NULL,
                descricao varchar NOT NULL,
                preco decimal NOT NULL,
                estoque integer NOT NULL,
                icms decimal NOT NULL,
                fornecedor varchar NOT NULL,
                marca varchar NOT NULL,
                categoria varchar NOT NULL,
                colecao varchar NOT NULL,
                ncm varchar NOT NULL,
                barcode varchar NOT NULL,
                "createdAt" timestamp NOT NULL DEFAULT now(),
                "updatedAt" timestamp NOT NULL DEFAULT now(),
                CONSTRAINT product_pk_id PRIMARY KEY (id)
            );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "product";`);
  }
}
