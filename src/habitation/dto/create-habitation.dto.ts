export enum tipoHabitacion {
    hotel = 'hotel',
    apartamento = 'apartamento',
    casa = 'casa',
    hostal = 'hostal'
}
//  Apartado de datos de Huespedes
export class Fechas{
    fechaDeLLegada: Date;
    fechaDeSalida: Date;
}
export class Huespedes{
    nombre: string;
    apellido: string;
    edad: number;
    documento: string;
    telefono: string;
    fechas: Fechas
}
//  Apartado de datos de servicios
export enum Disponible{
    noSeSabe = "no sabemos",
    disponible = "hay Disponible", 
    noDisponible = "No hay Disponible"
}
export class Servicios{
    piscina: Disponible;
    wifi: Disponible;
    estacionamiento: Disponible;
    restaurante: Disponible;
    bar: Disponible;
    spa: Disponible;
    gimnasio: Disponible;
}
//  creacion del Objeto 
export class CreateHabitationDto {
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
