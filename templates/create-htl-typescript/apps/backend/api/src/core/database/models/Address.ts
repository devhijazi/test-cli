import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Address')
export class AddressRepository extends BaseEntity implements Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  city: string;

  @Column('varchar')
  street: string;

  @Column('int')
  number: number;

  @Column('varchar')
  zip_code: string;

  @Column('varchar')
  neighborhood: string;

  @Column('varchar', { nullable: true })
  state: string | null;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
