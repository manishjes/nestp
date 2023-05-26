import { Car } from "src/car/entities/car.entity";
import { Carcompany } from "src/carcompany/entities/carcompany.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity()


export class Owner {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ownername: string;

    @Column()
    ownerdesc: string;


    @OneToMany(() => Carcompany, (carcompany)=> carcompany.owner, {cascade: true})
    carcompany:Carcompany[]

    @OneToMany(() => Car, (car)=> car.owner, {cascade: true})
    car:Car[]

   
}
