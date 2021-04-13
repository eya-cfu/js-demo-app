import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity() //we annotated class Contact as a typeorm entity
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() //class attributes are equivalent to the db table columns
  name: string;

  @Column()
  title: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  city: string;
}