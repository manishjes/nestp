import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
} from "typeorm"
import { Car } from "src/car/entities/car.entity"

@Entity()
export class Carcompany {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    carcompanyname: string


    @Column()
    companydescription: string

    @OneToMany(() => Car, (car) => car.carcompany, {cascade: true}) 
    car: Car[]
}