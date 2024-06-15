import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserResponse } from './users.interface.js';
import { UserNewParams } from './users.validator.js';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signUp')
  async create(@Body() user: UserNewParams): Promise<CreateUserResponse> {
    return await this.usersService.create(user);
  }
}
