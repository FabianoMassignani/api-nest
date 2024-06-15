import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CORS } from './constants/cors';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(CORS);

  app.useGlobalPipes(new ValidationPipe());

  app.setGlobalPrefix('/api');

  await app.listen(3001);

  console.log(`Application running on: ${await app.getUrl()}`);
}

bootstrap();
