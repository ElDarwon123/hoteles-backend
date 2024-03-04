import { Test, TestingModule } from '@nestjs/testing';
import { HabitationService } from './habitation.service';

describe('HabitationService', () => {
  let service: HabitationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HabitationService],
    }).compile();

    service = module.get<HabitationService>(HabitationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
