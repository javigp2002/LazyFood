import { equipoReal } from "./equipoReal";

class Calendario{
    private _partidos: equipoReal[][];
    private _jornada: number;

    constructor() {
        this._partidos = [];
        this._jornada = 0;
    }


    getPartidos(): equipoReal[][] {
        return this._partidos;
    }
}