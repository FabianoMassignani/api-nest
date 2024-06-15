import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  nome: string;

  @Column({ type: 'varchar' })
  descricao: string;

  @Column({ type: 'decimal' })
  preco: number;

  @Column({ type: 'integer' })
  estoque: number;

  @Column({ type: 'decimal' })
  icms: number;

  @Column({ type: 'varchar' })
  fornecedor: string;

  @Column({ type: 'varchar' })
  marca: string;

  @Column({ type: 'varchar' })
  categoria: string;

  @Column({ type: 'varchar' })
  colecao: string;

  @Column({ type: 'varchar' })
  ncm: string;

  @Column({ type: 'varchar' })
  barcode: string;

  @Column({ type: 'timestamp' })
  createdAt: Date;

  @Column({ type: 'timestamp' })
  updatedAt: Date;
}
