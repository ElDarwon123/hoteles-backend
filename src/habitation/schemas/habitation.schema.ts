import { Schema } from "mongoose";


const tipoHabitacion = new Schema({
    hotels: { type: String, default: "Hotel" },
    apartamento: { type: String, default: "Apartamento" },
    casa: { type: String, default: "Casa" },
    hostal: { type: String, default: "Hostal" }
})
//  Apartado de datos de Huespedes
const Fechas = new Schema({
    fechaDeLLegada: { type: Date, default: Date.now() },
    fechaDeSalida: { type: Date, default: Date.now() }
})

const Huespedes = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    documento: String,
    telefono: String,
    fechas: Fechas
})
//  Apartado de datos de servicios
const Disponible = new Schema({
    noSeSabe: { type: String, default: "No sabemos" },
    disponible: { type: String, default: "Hay disponible" },
    noDisponible: { type: String, default: "No hay Disponible" }
})
const Servicios = new Schema({
    piscina: Disponible,
    wifi: Disponible,
    estacionamiento: Disponible,
    restaurante: Disponible,
    bar: Disponible,
    spa: Disponible,
    gimnasio: Disponible
})

export const HabitationSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagen: { type: String, required: true },
    localizacion: String,
    precio: Number,
    calificacion: Number,
    disponibilidad: { type: Boolean, default: "no disponible" },
    tipoDeHabitacion: String,
    capacidad: Number,
    huespedes: {
        nombre: String,
        apellido: String,
        edad: Number,
        documento: String,
        telefono: String,
        fechas: {
            fechaDeSalida: { type: Date, default: Date.now },
            fechaDeLlegada: { type: Date, default: Date.now },
        }
    },
    servicios: {
        piscina: Boolean,
        wifi: Boolean,
        estacionamiento: Boolean,
        restaurante: Boolean,
        bar: Boolean,
        spa: Boolean,
        gimnasio: Boolean,
    }
})