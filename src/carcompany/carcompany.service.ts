import { Injectable } from '@nestjs/common';
import { CreateCarcompanyDto } from './dto/create-carcompany.dto';
import { UpdateCarcompanyDto } from './dto/update-carcompany.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Carcompany } from './entities/carcompany.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarcompanyService {

  constructor(@InjectRepository(Carcompany) private readonly carcompanyRepository: Repository<Carcompany>){}


  create(createCarcompanyDto: CreateCarcompanyDto):Promise<Carcompany> {
    let carcompany: Carcompany = new Carcompany()
    carcompany.carcompanyname = createCarcompanyDto.carcompanyname
    carcompany.companydescription= createCarcompanyDto.companydescription

    return this.carcompanyRepository.save(carcompany)
  }

  findAll():Promise<Carcompany[]> {
    return this.carcompanyRepository.find()
  }

  findOne(id: number) {
    return  this.carcompanyRepository.findOne({where:{id:id}})
  }

  update(id: number, updateCarcompanyDto: UpdateCarcompanyDto) {
    let carcompany: Carcompany = new Carcompany()
    carcompany.carcompanyname = updateCarcompanyDto.carcompanyname
    carcompany.companydescription= updateCarcompanyDto.companydescription

    return this.carcompanyRepository.save(carcompany)
  }

  remove(id: number) {
    return this.carcompanyRepository.delete(id)
  }
}
 