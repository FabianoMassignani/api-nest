import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { fetchData } from './product.utils';
import { IProductResponse } from './product.interface';

@Injectable()
export class ProductService {
  async post(data): Promise<IProductResponse> {
    try {
      const data = [];

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
}
