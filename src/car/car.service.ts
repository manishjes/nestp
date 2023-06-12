import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { idText } from 'typescript';
import { Carcompany } from 'src/carcompany/entities/carcompany.entity';
import { Owner } from 'src/owner/entities/owner.entity';


@Injectable()
export class CarService {
 
  constructor(@InjectRepository(Car) private readonly carRepository: Repository<Car>) {

  } 
  create(createCarDto: CreateCarDto): Promise<Car> {
    
    

    let car:Car = new Car();
    car.carname = createCarDto.carname
    car.cardescription = createCarDto.cardescription
    car.carqty = createCarDto.carqty
    car.carcompany = createCarDto.carcompany as Carcompany
    car.owner = createCarDto.owner as Owner
    return this.carRepository.save(car) 
  } 


  findAll(): Promise<Car[]> {
    return this.carRepository.find({relations:['carcompany', 'owner'], });
  }

  findOne(id: number) {
    return this.carRepository.findOne({where:{id:id}, relations:['carcompany', 'owner']})
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    let car:Car = new Car();
    car.carname = updateCarDto.carname 
    car.cardescription = updateCarDto.cardescription
    car.carqty = updateCarDto.carqty
    car.id = id 
    return this.carRepository.save(car)
    
  }  
 
  remove(id: number) {
    return this.carRepository.delete(id); 
  }  
}      
                       