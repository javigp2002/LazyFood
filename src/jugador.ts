import { equipoReal } from "./equiporeal";

export class Jugador {
    private _nombre: string;
    private _puntuacionPorJornada: number[];
    private _valor_por_jornada: number[];
    private equipo_al_que_pertenece: equipoReal;

    constructor(nombre: string, puntuacionPorJornada: number[], valor_por_jornada: number[], equipo_al_que_pertenece: equipoReal) {
        this._nombre = nombre;
        this._puntuacionPorJornada = puntuacionPorJornada;
        this._valor_por_jornada = valor_por_jornada;
        this.equipo_al_que_pertenece = equipo_al_que_pertenece;
    }

    getPuntuacionPorJornada(): number[] {
        return this._puntuacionPorJornada;
    }

    getValorPorJornada(): number[] {
        return this._valor_por_jornada;
    }

}