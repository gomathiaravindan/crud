import 'reflect-metadata';
import {Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class Calllog{

    @PrimaryGeneratedColumn()
    Contact_id: number;

    @Column({length: 25})
    Name: string;
    
    @Column('date')
    Phone: number;

    @Column()
    Call_type: string;

    @Column()
    Duration: Float32Array;

    @Column({
        type: 'datetime',
        nullable:true
    })
    time: string;
}