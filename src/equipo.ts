import { Jugador } from './jugador.ts';
import { Calendario } from "./calendario.ts";

export class Equipo {
    constructor(
        private nombre: string, 
        private jugadores: Jugador[],
        private calendario: Calendario)
    {}

    getNombre(): string {
        return this.nombre;
    }

    getJugadores(): Jugador[] {
        return this.jugadores;
    }

    getJugadorOptimo(): Jugador {
        return this.jugadores[0];
    }

}