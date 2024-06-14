import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductNewParams } from './product.validator';
import {
  IProductsResponse,
  IProduct,
  FindAllParams,
} from './product.interface';

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
  @UsePipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  )
  async post(@Body() Data: ProductNewParams): Promise<IProduct> {
    return this.productService.post(Data);
  }

  @Put()
  @UsePipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  )
  async put(@Body() Data: ProductNewParams): Promise<IProduct> {
    return this.productService.put(Data);
  }
}
