import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateHabitationDto } from './dto/create-habitation.dto';
import { UpdateHabitationDto } from './dto/update-habitation.dto';
import { Habitation_test } from './interfaces/habitation.interface';


@Injectable()
export class HabitationService {
  // aquien en el InjectModel se trane el valor de name en el import de MongooseModel en el habitaion.module.ts
  constructor(@InjectModel('Habitation')private readonly habitationModel: Model<Habitation_test>) {}
  
  async create(createHabitationDto: CreateHabitationDto): Promise<Habitation_test>{
    const newHab = new this.habitationModel(createHabitationDto)
    return await newHab.save();
  }

  async findAll(): Promise<Habitation_test[]> {
    const habitations = await this.habitationModel.find();
    return habitations
  }

  async findOne(id: string): Promise<Habitation_test> {
    const habitation = await this.habitationModel.findById(id)
    return habitation;
  }

  async update(id: string, updateHabitationDto: UpdateHabitationDto): Promise<Habitation_test> {
    const updatedHab = await this.habitationModel.findByIdAndUpdate(id, updateHabitationDto, {newHab: true})
    return updatedHab;
  }

  async remove(id: string): Promise<Habitation_test> {
    const deleteHab = await this.habitationModel.findByIdAndDelete(id) 
    return deleteHab;
  }
}
