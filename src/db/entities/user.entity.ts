import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { IUser } from '../../users/users.interface';
@Entity({ name: 'user' })
export class UserEntity extends BaseEntity implements IUser {
  @Column({ type: 'varchar' })
  username: string;

  @Column({ type: 'varchar', name: 'password' })
  password: string;
}
