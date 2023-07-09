import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>,
  ) {}

  findAll() {
    return this.coursesRepository.find();
  }

  findFirst() {
    // return this.coursesRepository.find({
    //   where: { course_code: 'CPSC 304' },
    //   relations: ['subject_code'],
    // });
    return this.coursesRepository.findOneBy({ course_code: 'CPSC 304' });
  }
}
