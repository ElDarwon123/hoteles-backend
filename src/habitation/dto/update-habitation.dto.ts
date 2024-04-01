import { PartialType } from '@nestjs/mapped-types';
import { CreateHabitationDto } from './create-habitation.dto';

export class UpdateHabitationDto extends PartialType(CreateHabitationDto) {
    nombre: string;
    descripcion: string;
    imagen: string;
    localizacion: string;
    precio: number;
    tipoDeHabitacion: string;
    capacidad: number;
    
}
