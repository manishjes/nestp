import { IsNumberString } from 'class-validator';
import { Carcompany } from 'src/carcompany/entities/carcompany.entity';
import { Owner } from 'src/owner/entities/owner.entity';

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


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

    @ManyToOne(()=> Carcompany, (carcompany)=>carcompany.car )
    carcompany: Carcompany

   @ManyToOne(() =>Owner, (owner)=> owner.car)
   owner:Owner
    

    
}  
 




