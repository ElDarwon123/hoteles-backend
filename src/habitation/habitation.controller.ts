import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { HabitationService } from './habitation.service';
import { CreateHabitationDto } from './dto/create-habitation.dto';
import { UpdateHabitationDto } from './dto/update-habitation.dto';

@Controller('api/habitation')
export class HabitationController {
  constructor(private readonly habitationService: HabitationService) { }

  @Post()
  async create(@Res() res, @Body() createHabitationDto: CreateHabitationDto) {
    const newHab = await this.habitationService.create(createHabitationDto);
    res.status(HttpStatus.OK).json(newHab);
  }

  @Get()
  findAll() {
    return this.habitationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.habitationService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHabitationDto: UpdateHabitationDto) {
    return this.habitationService.update(id, updateHabitationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.habitationService.remove(id);
  }
}
