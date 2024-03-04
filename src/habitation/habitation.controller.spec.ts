import { Test, TestingModule } from '@nestjs/testing';
import { HabitationController } from './habitation.controller';
import { HabitationService } from './habitation.service';

describe('HabitationController', () => {
  let controller: HabitationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HabitationController],
      providers: [HabitationService],
    }).compile();

    controller = module.get<HabitationController>(HabitationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
