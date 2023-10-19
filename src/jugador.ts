export class Jugador {
    private _nombre: string;
    private _puntuacionPorJornada: number[];

    constructor(nombre: string, valor_por_jornada: number[], puntuacionPorJornada: number[]) {
        this._nombre = nombre;
        this._puntuacionPorJornada = puntuacionPorJornada;
    }

    getNombre(): string {
        return this._nombre;
    }

    getPuntuacionPorJornada(): number[] {
        return this._puntuacionPorJornada;
    }

}