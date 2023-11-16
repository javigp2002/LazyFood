import { EquipoReal } from "./equipo_real.ts";

export class Jugador {
    constructor(
        private nombre: string, 
        private puntuacionPorJornada: number[], 
        private valor_por_jornada: number[], 
        private equipo_al_que_pertenece: EquipoReal) {}

    getNombre(): string {
        return this.nombre;
    }
    
    getPuntuacionPorJornada(): number[] {
        return this.puntuacionPorJornada;
    }

    getValorPorJornada(): number[] {
        return this.valor_por_jornada;
    }

    getEquipoAlQuePertenece(): EquipoReal{
        return this.equipo_al_que_pertenece
    }
    
    getHeuristica(): number {
        const importancia_por_jornada: number[] = [0.4, 0.3, 0.25, 0.15]
        const importancia_por_valor: number[] = [0.35, 0.25, 0.25, 0.15]
        
        const heuristica_puntuacion = -0.65;
        const heuristica_valor = 0.25;
        
        return this.mediaPuntuacion(importancia_por_jornada) * heuristica_puntuacion +
                this.mediaValor(importancia_por_valor) * heuristica_valor;
    }

    mediaPuntuacion(importancia_por_jornada: number[]): number {
        return this.getPuntuacionPorJornada().reduce(function(media, puntuación,
            index){return media + puntuación * importancia_por_jornada[index]}, 0);
    }

    mediaValor(importancia_por_valor: number[]): number {
        let media = 0;   
        const diferencia_por_valor_mercado = 7500000
        
        this.valor_por_jornada.forEach(function(valor, index){
            media += valor/diferencia_por_valor_mercado * importancia_por_valor[index]
        }); 
        
        return media;
    }
  


}