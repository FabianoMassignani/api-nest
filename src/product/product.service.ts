import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import {
  IProduct,
  IProductsResponse,
  FindAllParams,
} from './interfaces/product.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from '../db/entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async getAll(params: FindAllParams): Promise<IProductsResponse> {
    try {
      const [data, total] = await this.productRepository.findAndCount({
        take: params.limit,
        skip: params.offset,
      });

      return { data };
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getById(id: string): Promise<IProduct> {
    try {
      const foundProduct = await this.productRepository.findOne({
        where: { id },
      });

      if (!foundProduct) {
        throw new HttpException('Produto não encontrado', HttpStatus.NOT_FOUND);
      }

      return foundProduct;
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async create(data: IProduct): Promise<IProduct> {
    try {
      const product: ProductEntity = {
        nome: data.nome,
        descricao: data.descricao,
        preco: data.preco,
        estoque: data.estoque,
        icms: data.icms,
        fornecedor: data.fornecedor,
        marca: data.marca,
        categoria: data.categoria,
        colecao: data.colecao,
        ncm: data.ncm,
        barcode: data.barcode,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result = await this.productRepository.save(product);

      return result;
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async put(data: IProduct): Promise<IProduct> {
    try {
      if (!data.id) {
        throw new HttpException('Id não informado', HttpStatus.BAD_REQUEST);
      }

      const productExists = await this.productRepository.findOne({
        where: { id: data.id },
      });

      if (!productExists) {
        throw new HttpException('Produto não encontrado', HttpStatus.NOT_FOUND);
      }

      const product: ProductEntity = {
        ...productExists,
        nome: data.nome,
        descricao: data.descricao,
        preco: data.preco,
        estoque: data.estoque,
        icms: data.icms,
        fornecedor: data.fornecedor,
        marca: data.marca,
        categoria: data.categoria,
        colecao: data.colecao,
        ncm: data.ncm,
        barcode: data.barcode,
        updatedAt: new Date(),
      };

      const result = await this.productRepository.save(product);

      return result;
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
