import { PartialType } from '@nestjs/mapped-types';
import { CreateCarcompanyDto } from './create-carcompany.dto';

export class UpdateCarcompanyDto extends PartialType(CreateCarcompanyDto) {}
