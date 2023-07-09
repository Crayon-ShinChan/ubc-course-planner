import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db.euidzdgsiqxhshwxdoco.supabase.co',
      // host: 'db.egfrockjdzjtbzrkjbwj.supabase.co',
      port: 5432,
      username: 'postgres',
      password: 'jW1LuxyhiPJIbFqK',
      // password: 'cRqCXo2V50cpAIRS',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true, // NEVER USE IN PRODUCTION
    }),
    CoursesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
