import {
  Entity,
  PrimaryColumn,
  Column,
  Check,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Subject } from './subject.entity';

@Entity('courses')
@Check(`(year >= 1900 AND year <= EXTRACT(YEAR FROM CURRENT_DATE))`) // Your CHECK constraint
export class Course {
  @PrimaryColumn({ type: 'varchar', length: 12 })
  course_code: string;

  @PrimaryColumn({ type: 'varchar', length: 20 })
  session: string;

  @Column({ type: 'integer', nullable: true })
  year: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  session_period: string;

  @Column({ type: 'varchar', length: 4, nullable: true })
  subject_code: string;

  @ManyToOne(() => Subject, (subject) => subject.subject_code) // Assuming you have a Subject entity
  @JoinColumn({ name: 'subject_code' })
  subject: Subject;

  @Column({ type: 'text', nullable: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'float', nullable: true })
  credits: number;

  @Column({ type: 'json', nullable: true })
  prerequisites: string;

  @Column({ type: 'text', nullable: true })
  prerequisites_text: string;

  @Column({ type: 'json', nullable: true })
  corequisites: string;

  @Column({ type: 'text', nullable: true })
  corequisites_text: string;
}
