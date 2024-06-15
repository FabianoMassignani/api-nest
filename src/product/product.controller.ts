import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductNewParams } from './product.validator';
import {
  IProductsResponse,
  IProduct,
  FindAllParams,
} from './product.interface';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/getAll')
  async getAll(@Query() params: FindAllParams): Promise<IProductsResponse> {
    return this.productService.getAll(params);
  }

  @Get('/getById')
  async getById(@Query('id') id: string): Promise<IProduct> {
    return this.productService.getById(id);
  }

  @Post()
  async post(@Body() Data: ProductNewParams): Promise<IProduct> {
    return this.productService.create(Data);
  }

  @Put()
  async put(@Body() Data: ProductNewParams): Promise<IProduct> {
    return this.productService.put(Data);
  }
}
