import { Document } from "mongoose";

export enum tipoHabitacion {
    hotel = 'hotel',
    apartamento = 'apartamento',
    casa = 'casa',
    hostal = 'hostal'
}
//  Apartado de datos de Huespedes

//  creacion del Objeto 
export interface Habitation_test extends Document {
    nombre: string;
    descripcion: string;
    imagen: string;
    localizacion: string;
    precio: number;
    tipoDeHabitacion: tipoHabitacion;
    capacidad: number;
    
}
