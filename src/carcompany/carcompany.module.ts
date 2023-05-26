import { Module } from '@nestjs/common';
import { CarcompanyService } from './carcompany.service';
import { CarcompanyController } from './carcompany.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carcompany } from './entities/carcompany.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carcompany])],
  controllers: [CarcompanyController],
  providers: [CarcompanyService]
})
export class CarcompanyModule {}
 