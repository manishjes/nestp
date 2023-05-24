import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { idText } from 'typescript';

@Injectable()
export class CarService {
 
  constructor(@InjectRepository(Car) private readonly carRepository: Repository<Car>) {

  }
  create(createCarDto: CreateCarDto): Promise<Car> {

    let car:Car = new Car();
    car.carname = createCarDto.carname
    car.cardescription = createCarDto.cardescription
    car.carqty = createCarDto.carqty
    return this.carRepository.save(car) 
  }


  findAll(): Promise<Car[]> {
    return this.carRepository.find();
  }

  findOne(id: number) {
    return this.carRepository.findOne({where:{id:id}})
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
        