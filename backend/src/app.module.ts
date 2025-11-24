import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { ContactModule } from './contact/contact.module';
import { ProjectModule } from './project/project.module';
import { User, UserRole } from './user/user.entity';
import { Contact } from './contact/contact.entity';
import { Project } from './project/project.entity';

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
      entities: [User, Contact, Project],
    }),
    TypeOrmModule.forFeature([User]),
    UserModule,
    AuthModule,
    ProfileModule,
    ContactModule,
    ProjectModule,
  ],
})
export class AppModule implements OnModuleInit {
  constructor() {}

  onModuleInit() {
    // The database is synchronized but we don't create default users here
    // Users can be created via the API endpoints or manually
    console.log(
      'Application started. Default admin credentials: admin@example.com / password123'
    );
  }
}
