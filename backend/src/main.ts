import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(cookieParser());
  app.enableCors({
    origin: 'http://localhost:3001', // Указываем домен фронтенда
    methods: 'GET, POST, PUT, DELETE, PATCH', // Разрешаем необходимые методы
    allowedHeaders: 'Content-Type, Accept, Authorization, Cookie', // Разрешаем заголовки
    credentials: true, // Разрешаем передавать куки
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
