import { Injectable } from '@nestjs/common';
import { CreateCarcompanyDto } from './dto/create-carcompany.dto';
import { UpdateCarcompanyDto } from './dto/update-carcompany.dto';

@Injectable()
export class CarcompanyService {
  create(createCarcompanyDto: CreateCarcompanyDto) {
    return 'This action adds a new carcompany';
  }

  findAll() {
    return `This action returns all carcompany`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carcompany`;
  }

  update(id: number, updateCarcompanyDto: UpdateCarcompanyDto) {
    return `This action updates a #${id} carcompany`;
  }

  remove(id: number) {
    return `This action removes a #${id} carcompany`;
  }
}
