import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Subject } from './entities/subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Subject])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
