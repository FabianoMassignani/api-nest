import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from '../db/entities/product.entity';

@Module({
  controllers: [ProductController],
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  providers: [ProductService],
})
export class ProductModule {}
