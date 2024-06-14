import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserResponse, UserDto } from './users.interface';
//import { hashSync as bcryptHashSync } from 'bcrypt';
//import { UserEntity } from '../db/entities/user.entity';
//import { Repository } from 'typeorm';
//import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  //   constructor(
  //     @InjectRepository(UserEntity)
  //     private usersRepository: Repository<UserEntity>,
  //   ) {}

  async create(newUser: UserDto): Promise<CreateUserResponse> {
    // const userAlreadyRegistered = await this.findByUserName(newUser.username);

    // if (userAlreadyRegistered) {
    //   throw new ConflictException(
    //     `User '${newUser.username}' already registered`,
    //   );
    // }

    // const dbUser = new UserEntity();
    // dbUser.username = newUser.username;
    // dbUser.passwordHash = bcryptHashSync(newUser.password, 10);

    // const { id, username } = await this.usersRepository.save(dbUser);
    const id = '1';
    const username = 'test';
    return { id, username };
  }

  async findByUserName(username: string): Promise<UserDto | null> {
    // const userFound = await this.usersRepository.findOne({
    //   where: { username },
    // });

    // if (!userFound) {
    //   return null;
    // }

    const userFound = {
      id: '1',
      username: 'test',
      passwordHash: 'password',
    };

    return {
      id: userFound.id,
      username: userFound.username,
      password: userFound.passwordHash,
    };
  }
}
