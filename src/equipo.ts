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

    getJugadorOptimo(fecha: Date): Jugador {
        let diferencia_dificultad_equipo: number = 0.1

        for (let i=0; i<this.jugadores.length; i++){
            let jugadorActual = this.jugadores[i]
            let heuristica = jugadorActual.getHeuristica();

            if (this.calendario.getSiguienteEnfrentamientoEquipo(fecha, jugadorActual.getEquipoAlQuePertenece()).getPuesto() < 
            jugadorActual.getEquipoAlQuePertenece().getPuesto())
                diferencia_dificultad_equipo = -0.1
            
            heuristica += diferencia_dificultad_equipo

            
        }

        
        
        return this.jugadores[0];
    }

}