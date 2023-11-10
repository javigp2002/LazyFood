import { EquipoReal } from "./equipo_real.ts";

export class Jugador {
    constructor(
        private nombre: string, 
        private puntuacionPorJornada: number[], 
        private valor_por_jornada: number[], 
        private equipo_al_que_pertenece: EquipoReal) {}

    getPuntuacionPorJornada(): number[] {
        return this.puntuacionPorJornada;
    }

    getValorPorJornada(): number[] {
        return this.valor_por_jornada;
    }

    getHeuristica(): number {
        let importancia_por_jornada: number[] = [0.4, 0.3, 0.25, 0.15]
        let importancia_por_valor: number[] = [0.35, 0.25, 0.25, 0.15]
        
        let media_puntuacion = this.mediaPuntuacion(importancia_por_jornada);
        let media_valor = this.mediaValor(importancia_por_valor);
        
         
        
        return 0;
    }



}