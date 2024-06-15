import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserResponse, UserDto } from './users.interface';
import { UserNewParams } from './users.validator';
import { hashSync as bcryptHashSync } from 'bcrypt';
import { UserEntity } from '../db/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  async create(newUser: UserNewParams): Promise<CreateUserResponse> {
    const userAlreadyRegistered = await this.findByUserName(newUser.username);

    if (userAlreadyRegistered) {
      throw new ConflictException(
        `Usuário com username ${newUser.username} já cadastrado`,
      );
    }

    const dbUser = new UserEntity();

    dbUser.username = newUser.username;
    dbUser.passwordHash = bcryptHashSync(newUser.password, 10);

    await this.usersRepository.save(dbUser);

    return {
      id: dbUser.id,
      username: dbUser.username,
    };
  }

  async findByUserName(username: string): Promise<UserDto | null> {
    const userFound = await this.usersRepository.findOne({
      where: { username },
    });

    if (!userFound) {
      return null;
    }

    return {
      id: userFound.id,
      username: userFound.username,
      password: userFound.passwordHash,
    };
  }
}
