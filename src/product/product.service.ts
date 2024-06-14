import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import {
  IProduct,
  IProductsResponse,
  FindAllParams,
} from './product.interface';

@Injectable()
export class ProductService {
  async getAll(params: FindAllParams): Promise<IProductsResponse> {
    try {
      const data = [
        {
          id: 1,
          nome: 'Camiseta',
          descricao: 'Camiseta de algodão',
          preco: 50.0,
          estoque: 100,
          icms: 0.18,
          fornecedor: 'Fornecedor 1',
          marca: 'Marca 1',
          categoria: 'Categoria 1',
          colecao: 'Coleção 1',
          ncm: '6109.10.00',
          barcode: '1234567890123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      return { data };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error?.message || 'Internal server error',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getById(id: string): Promise<IProduct> {
    try {
      if (!id) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'Id is required',
          },
          HttpStatus.BAD_REQUEST,
        );
      }

      const data = {
        id: 1,
        nome: 'Camiseta',
        descricao: 'Camiseta de algodão',
        preco: 50.0,
        estoque: 100,
        icms: 0.18,
        fornecedor: 'Fornecedor 1',
        marca: 'Marca 1',
        categoria: 'Categoria 1',
        colecao: 'Coleção 1',
        ncm: '6109.10.00',
        barcode: '1234567890123',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      return data;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error?.message || 'Internal server error',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async post(data): Promise<IProduct> {
    try {
      const data = {
        id: 1,
        nome: 'Camiseta',
        descricao: 'Camiseta de algodão',
        preco: 50.0,
        estoque: 100,
        icms: 0.18,
        fornecedor: 'Fornecedor 1',
        marca: 'Marca 1',
        categoria: 'Categoria 1',
        colecao: 'Coleção 1',
        ncm: '6109.10.00',
        barcode: '1234567890123',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      return data;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error?.message || 'Internal server error',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async put(data): Promise<IProduct> {
    try {
      const data = {
        id: 1,
        nome: 'Camiseta',
        descricao: 'Camiseta de algodão',
        preco: 50.0,
        estoque: 100,
        icms: 0.18,
        fornecedor: 'Fornecedor 1',
        marca: 'Marca 1',
        categoria: 'Categoria 1',
        colecao: 'Coleção 1',
        ncm: '6109.10.00',
        barcode: '1234567890123',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      return data;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error?.message || 'Internal server error',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
