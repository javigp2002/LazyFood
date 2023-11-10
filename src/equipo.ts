import { Jugador } from './jugador.ts';

export class Equipo {
    constructor(
        private nombre: string, 
        private jugadores: Jugador[])
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