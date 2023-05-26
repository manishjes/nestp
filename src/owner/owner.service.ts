import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OwnerService {
  constructor(@InjectRepository(Owner) private readonly ownerRepository: Repository<Owner> ){}
  create(createOwnerDto: CreateOwnerDto): Promise<Owner> {
    let owner: Owner = new Owner()

    owner.ownername = createOwnerDto.ownername
    owner.ownerdesc= createOwnerDto.ownerdesc

    return this.ownerRepository.save(owner)
  }

  findAll(): Promise<Owner[]> {
    return  this.ownerRepository.find();
  }

  findOne(id: number) {
    return this.ownerRepository.findOne({where:{id:id}});
  }

  update(id: number, updateOwnerDto: UpdateOwnerDto) {
    let owner: Owner = new Owner()

    owner.ownername = updateOwnerDto.ownername
    owner.ownerdesc= updateOwnerDto.ownerdesc
    owner.id = id

    return this.ownerRepository.save(owner)
  }

  remove(id: number) {
    return this.ownerRepository.delete(id);
  }
}
