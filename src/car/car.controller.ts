import { User } from './../user/entities/user.entity';
import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarGuard } from './car.guard';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import {diskStorage} from 'multer'
import {v4 as uuidv4} from 'uuid'
import * as path from 'path';
import { Observable, of } from 'rxjs';   

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



@Post('upload')
@UseInterceptors(FileInterceptor('file', {
  storage: diskStorage({
    destination: './uploads/profileimages',
    filename: (req, file, cb) => {
      const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
      const extension: string = path.parse(file.originalname).ext;

      
      cb(null, `${filename}${extension}`)
     
    }
  })  
}))
  uploadFile( @UploadedFile() file):Observable<object>{
    console.log(file)
return of ({imagePath: file.path})
  }
}        
          