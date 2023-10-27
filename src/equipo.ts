import { Jugador } from './jugador';

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

}