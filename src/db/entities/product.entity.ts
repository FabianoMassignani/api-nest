import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';
import { IProduct } from '../../product/product.interface';
@Entity({ name: 'product' })
export class ProductEntity extends BaseEntity implements IProduct {
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
}
