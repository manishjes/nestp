import { User } from './../user/entities/user.entity';
import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarGuard } from './car.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(ValidationPipe)
   
  
  create(@Body() createCarDto: CreateCarDto) {
    
    return this.carService.create(createCarDto);
  }

  @Get() 
  

  findAll() {
    return this.carService.findAll(); 
  }

  @Get(':id')
  
  findOne(@Param('id') id: string) {
    
    return this.carService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.update(+id, updateCarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carService.remove(+id);
  }
}
      