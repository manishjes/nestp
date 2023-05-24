import { IsNumberString } from 'class-validator';

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Car {

    @PrimaryGeneratedColumn()
    id:number
    



    @Column()
    carname: string

    @Column()
    cardescription: string
 
    @Column()
    @IsNumberString({}, { message: 'Please enter correct number' }) 
    
    
    carqty : number

    
}  
 




