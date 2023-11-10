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
        let diferencia_dificultad_equipo: number = 0.1
        


        
        
        return this.jugadores[0];
    }

}