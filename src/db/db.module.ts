import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (configServise: ConfigService) => ({
        type: 'postgres',
        host: configServise.get<string>('DB_HOST'),
        port: +configServise.get<number>('DB_PORT'),
        username: configServise.get<string>('DB_USER'),
        password: configServise.get<string>('DB_PASS'),
        database: configServise.get<string>('DB_NAME'),
        entities: [__dirname + '/entities/**'],
        migrations: [__dirname + '/migrations/*.ts'],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DbModule {}
