import { config } from 'dotenv';
import { DataSourceOptions, DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { ProductEntity } from './entities/product.entity';
import { UserEntity } from './entities/user.entity';

config();

const configServise = new ConfigService();

const dataSourseOptions: DataSourceOptions = {
  type: 'postgres',
  host: configServise.get<string>('DB_HOST'),
  port: +configServise.get<number>('DB_PORT'),
  username: configServise.get<string>('DB_USER'),
  password: configServise.get<string>('DB_PASS'),
  database: configServise.get<string>('DB_NAME'),
  entities: [ProductEntity, UserEntity],
  migrations: [__dirname + '/migrations/*.ts'],
  synchronize: false,
};

export default new DataSource(dataSourseOptions);
