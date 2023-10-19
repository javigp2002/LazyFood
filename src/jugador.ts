export class Jugador {
    private _nombre: string;
    private _puntuacionPorJornada: number[];
    private _valor_por_jornada: number[];

    constructor(nombre: string, puntuacionPorJornada: number[], valor_por_jornada: number[]) {
        this._nombre = nombre;
        this._puntuacionPorJornada = puntuacionPorJornada;
        this._valor_por_jornada = valor_por_jornada;
    }

    getNombre(): string {
        return this._nombre;
    }

    getPuntuacionPorJornada(): number[] {
        return this._puntuacionPorJornada;
    }

    getValorPorJornada(): number[] {
        return this._valor_por_jornada;
    }

}