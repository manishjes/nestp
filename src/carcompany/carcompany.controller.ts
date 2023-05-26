import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarcompanyService } from './carcompany.service';
import { CreateCarcompanyDto } from './dto/create-carcompany.dto';
import { UpdateCarcompanyDto } from './dto/update-carcompany.dto';

@Controller('carcompany')
export class CarcompanyController {
  constructor(private readonly carcompanyService: CarcompanyService) {}

  @Post()
  create(@Body() createCarcompanyDto: CreateCarcompanyDto) {
       
    return this.carcompanyService.create(createCarcompanyDto);
  }

  @Get()
  findAll() {
    return this.carcompanyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carcompanyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarcompanyDto: UpdateCarcompanyDto) {
    return this.carcompanyService.update(+id, updateCarcompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carcompanyService.remove(+id);
  }
}
  