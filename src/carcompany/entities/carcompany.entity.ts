import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
    ManyToOne,
} from "typeorm"
import { Car } from "src/car/entities/car.entity"
import { Owner } from "src/owner/entities/owner.entity"

@Entity()
export class Carcompany {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    carcompanyname: string


    @Column()
    companydescription: string

    @OneToMany(() => Car, (car) => car.carcompany,{cascade: true}) 
    car: Car[]


    @ManyToOne(()=> Owner, (owner)=> owner.carcompany )
    owner:Owner
}