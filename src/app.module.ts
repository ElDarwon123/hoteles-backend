import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HabitationModule } from './habitation/habitation.module';
import { MongooseModule } from '@nestjs/mongoose';
const url = 'mongodb+srv://steven:hola123@cluster0.xqlmvl9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
@Module({
  imports: [HabitationModule, MongooseModule.forRoot(url)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
