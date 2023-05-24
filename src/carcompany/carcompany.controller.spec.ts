import { Test, TestingModule } from '@nestjs/testing';
import { CarcompanyController } from './carcompany.controller';
import { CarcompanyService } from './carcompany.service';

describe('CarcompanyController', () => {
  let controller: CarcompanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarcompanyController],
      providers: [CarcompanyService],
    }).compile();

    controller = module.get<CarcompanyController>(CarcompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
