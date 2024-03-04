import { PartialType } from '@nestjs/mapped-types';
import { CreateHabitationDto, Disponible, Huespedes, Servicios, tipoHabitacion } from './create-habitation.dto';

export class UpdateHabitationDto extends PartialType(CreateHabitationDto) {
    nombre: string;
    descripcion: string;
    imagen: string;
    localizacion: string;
    precio: number;
    calificacion: number;
    disponibilidad: Disponible;
    tipoDeHabitacion: tipoHabitacion;
    capacidad: number;
    huespedes: Huespedes;
    servicios: Servicios;
}
