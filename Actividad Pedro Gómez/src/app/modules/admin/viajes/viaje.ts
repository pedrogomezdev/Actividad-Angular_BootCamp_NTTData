import { UsuarioData } from "../usuario/usuarioData";
import { Posicion } from "./posicion";

export class Viaje {
    id: string;
    organizador: UsuarioData | null;
    titulo: string;
    descripcion: string;
    salida: string;
    puntoSalida: Posicion;
    puntoLlegada: Posicion;
    reservas: any[] | null;

    constructor(
        id: string,
        organizador: UsuarioData | null,
        titulo: string,
        descripcion: string,
        salida: string,
        puntoSalida: Posicion,
        puntoLlegada: Posicion,
        reservas: any[] | null
    ) {
        this.id = id;
        this.organizador = organizador;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.salida = salida;
        this.puntoSalida = puntoSalida;
        this.puntoLlegada = puntoLlegada;
        this.reservas = reservas;
    }
}
