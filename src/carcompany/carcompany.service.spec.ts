import { Test, TestingModule } from '@nestjs/testing';
import { CarcompanyService } from './carcompany.service';

describe('CarcompanyService', () => {
  let service: CarcompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarcompanyService],
    }).compile();

    service = module.get<CarcompanyService>(CarcompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
