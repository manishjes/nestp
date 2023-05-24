import { Module } from '@nestjs/common';
import { CarcompanyService } from './carcompany.service';
import { CarcompanyController } from './carcompany.controller';

@Module({
  controllers: [CarcompanyController],
  providers: [CarcompanyService]
})
export class CarcompanyModule {}
