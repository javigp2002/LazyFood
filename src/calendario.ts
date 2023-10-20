import { equipoReal } from "./equipoReal";

class Calendario{
    private _partidos: equipoReal[][];

    constructor() {
        this._partidos = [];
    }


    getPartidos(): equipoReal[][] {
        return this._partidos;
    }
}