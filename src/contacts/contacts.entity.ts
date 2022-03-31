import 'reflect-metadata';
import {Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class Contacts{

    @PrimaryGeneratedColumn()
    Contact_id: number;

    @Column({length: 25})
    Name: string;
    
    @Column('date')
    Phone: number;

    @Column()
    Address: string;

    @Column()
    Email: string;

    @Column()
    Notes: string;
}