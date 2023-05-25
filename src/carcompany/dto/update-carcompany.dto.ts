import { PartialType } from '@nestjs/mapped-types';
import { CreateCarcompanyDto } from './create-carcompany.dto';
import { Carcompany } from '../entities/carcompany.entity';

export class UpdateCarcompanyDto extends PartialType(CreateCarcompanyDto) {

    carcompanyname: string
    companydescription:string
    
}
