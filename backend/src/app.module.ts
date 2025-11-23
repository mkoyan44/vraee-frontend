import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { ContactModule } from './contact/contact.module';
import { User } from './user/user.entity';
import { Contact } from './contact/contact.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Делает переменные окружения доступными по всему приложению
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
      entities: [User, Contact],
    }),
    UserModule,
    AuthModule,
    ProfileModule,
    ContactModule,
  ],
})
export class AppModule {}
