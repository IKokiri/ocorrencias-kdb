import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export default class User {
  @PrimaryColumn()
  id!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;
}
