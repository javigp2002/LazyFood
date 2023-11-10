import { equipoReal } from "./equipo_real.ts";

export class Jugador {
    constructor(
        private nombre: string, 
        private puntuacionPorJornada: number[], 
        private valor_por_jornada: number[], 
        private equipo_al_que_pertenece: equipoReal) {}

    getPuntuacionPorJornada(): number[] {
        return this.puntuacionPorJornada;
    }

    getValorPorJornada(): number[] {
        return this.valor_por_jornada;
    }

    getHeuristica(): number {
        let importancia_por_jornada: Number[] = [0.15, 0.25, 0.3, 0.4]
        
        return 0;
    }

    

}