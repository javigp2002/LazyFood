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
        let jugadorOptimo: Jugador = this.jugadores[0];
        let maximoValorHeuristica = Number.MIN_VALUE;

        for (let i=0; i<this.jugadores.length; i++){
            let diferencia_dificultad_equipo = 0.1;
            const jugadorActual = this.jugadores[i];
            let heuristicaActual = jugadorActual.getHeuristica();

            if (this.calendario.getSiguienteEnfrentamientoEquipo(fecha, jugadorActual.getEquipoAlQuePertenece()).getPuesto() > 
            jugadorActual.getEquipoAlQuePertenece().getPuesto())
                diferencia_dificultad_equipo = -0.1

            heuristicaActual += diferencia_dificultad_equipo

            if (heuristicaActual>maximoValorHeuristica){
                jugadorOptimo = jugadorActual;
                maximoValorHeuristica = heuristicaActual;
            }
        }

        return jugadorOptimo;
    }

}