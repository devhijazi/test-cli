import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

import { PasswordHelper } from '@infra/helpers/PasswordHelper';

const ENPLOYEE_PERMISSION_ENUM: readonly Employee['permission'][] = [
  0,
  1,
  2,
] as const;

@Entity('Employee')
export class EmployeeRepository extends BaseEntity implements Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  email: string;

  @Column('varchar')
  password: string;

  @Column('varchar')
  full_name: string;

  @Column('enum', { enum: ENPLOYEE_PERMISSION_ENUM })
  permission: Employee['permission'];

  @Column('varchar', { nullable: true })
  phone: string | null;

  @Column('varchar', { nullable: true })
  avatar: string | null;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    this.password = await PasswordHelper.generate(this.password);
  }
}
