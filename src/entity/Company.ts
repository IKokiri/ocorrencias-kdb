import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export default class Company {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;
}
