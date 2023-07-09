import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('subjects')
export class Subject {
  @PrimaryColumn({ type: 'char', length: 4 })
  subject_code: string;

  @Column({ type: 'text', nullable: true })
  subject_name: string;

  @Column({ type: 'text', nullable: true })
  faculty: string;
}
