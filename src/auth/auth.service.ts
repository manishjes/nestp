import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Auth } from './entities/auth.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class AuthService {
  constructor(@InjectRepository(Auth) private readonly authRepository: Repository<Auth>) {}

  
  async create(createAuthDto: CreateAuthDto){
    const user:Auth = new Auth()
    user.email = createAuthDto.email
    user.password = createAuthDto.password
   await this.authRepository.save(user)

   delete user.password
   return user
  }
     
  async showById(id:number): Promise<Auth>{
    const user = await this.findById(id)

    delete user.password
    return user
  }
  async findById(id: number) {
    return this.authRepository.findOne({where:{id:id}})
  }
  async findByEmail(email:string){
    return this.authRepository.findOne({where:{email:email}})
  }
  
}
