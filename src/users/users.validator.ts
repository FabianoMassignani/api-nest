import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserNewParams {
  @ApiProperty({
    description: 'Nome do usuário',
  })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({
    description: 'Senha do usuário',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
