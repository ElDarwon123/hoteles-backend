import { Module } from '@nestjs/common';
import { HabitationService } from './habitation.service';
import { HabitationController } from './habitation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HabitationSchema } from './schemas/habitation.schema';
@Module({
  imports: [MongooseModule.forFeature([{name: 'Habitation', schema:HabitationSchema}])],
  controllers: [HabitationController],
  providers: [HabitationService],
})
export class HabitationModule {}
