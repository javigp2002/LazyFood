import { Jugador } from './jugador.ts';
import { Calendario } from "./calendario.ts";
import { Logger } from '../logger/logger.ts';

export class Equipo {
    logger = Logger.instance().getLogger();

    constructor(
        private nombre: string, 
        private jugadores: Jugador[],
        private calendario: Calendario)
    {
        this.logger.info("Creando equipo " + nombre);
    }

    getJugadores(): Jugador[] {
        return this.jugadores;
    }

    getJugadorOptimo(fecha: Date): Jugador {
        this.logger.debug("Calculando jugador optimo para el equipo " + this.nombre + " en la fecha " + fecha.toDateString());

        let jugadorOptimo: Jugador = this.jugadores[0];
        let maximoValorHeuristica = Number.MIN_VALUE;
        const valor_diferencia_equipo_positiva = 0.1;
        const valor_diferencia_equipo_negativa = -0.1;


        for (let i=0; i<this.jugadores.length; i++){
            let diferencia_dificultad_equipo = valor_diferencia_equipo_positiva;
            const jugadorActual = this.jugadores[i];
            let heuristicaActual = jugadorActual.getHeuristica();

            if (this.calendario.getSiguienteEnfrentamientoEquipo(fecha, jugadorActual.getEquipoAlQuePertenece()).getPuesto() > 
            jugadorActual.getEquipoAlQuePertenece().getPuesto())
                diferencia_dificultad_equipo = valor_diferencia_equipo_negativa

            heuristicaActual += diferencia_dificultad_equipo

            if (heuristicaActual>maximoValorHeuristica){
                jugadorOptimo = jugadorActual;
                maximoValorHeuristica = heuristicaActual;
            }
        }

        this.logger.debug("El jugador optimo es " + jugadorOptimo.getNombre() + " con una heuristica de " + maximoValorHeuristica);

        return jugadorOptimo;
    }

}