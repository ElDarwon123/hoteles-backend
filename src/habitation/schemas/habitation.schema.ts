import { Schema } from "mongoose";




export const HabitationSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagen: { type: String, required: true },
    precio: Number,
    disponibilidad: { type: Boolean, default: false },
    tipoDeHabitacion: String,
    capacidad: Number,
})