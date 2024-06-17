import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductNewParams {
  @ApiProperty({
    description: 'Nome do produto.',
  })
  @IsNotEmpty()
  @IsString()
  @Max(20)
  nome: string;

  @ApiProperty({
    description: 'Descrição do produto.',
  })
  @IsString()
  @Max(100)
  descricao: string;

  @ApiProperty({
    description: 'Preço do produto.',
  })
  @IsNotEmpty()
  @IsNumber()
  preco: number;

  @ApiProperty({
    description: 'Estoque do produto.',
  })
  @IsNotEmpty()
  @IsNumber()
  estoque: number;

  @ApiProperty({
    description: 'Imposto sobre Circulação de Mercadorias e Serviços.',
  })
  @IsOptional()
  @IsNumber()
  icms: number;

  @ApiProperty({
    description: 'Fornecedor do produto.',
  })
  @IsOptional()
  @IsString()
  fornecedor: string;

  @ApiProperty({
    description: 'Marca do produto.',
  })
  @IsOptional()
  @IsString()
  marca: string;

  @ApiProperty({
    description: 'Categoria do produto.',
  })
  @IsOptional()
  @IsString()
  categoria: string;

  @ApiProperty({
    description: 'Coleção do produto.',
  })
  @IsOptional()
  @IsString()
  colecao: string;

  @ApiProperty({
    description: 'Nomenclatura Comum do Mercosul.',
  })
  @IsOptional()
  @IsString()
  ncm: string;

  @ApiProperty({
    description: 'Código de barras.',
  })
  @IsOptional()
  @IsString()
  barcode: string;
}
