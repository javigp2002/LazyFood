import { Jugador } from './jugador';

class Equipo {
    private _nombre: string;
    private _jugadores: Jugador[];
    private _clasificacion: number;
    private _presupuesto: number;
    private _partidos: Equipo[];

    constructor(nombre: string, jugadores: Jugador[], partidos: Equipo[]){
        this._nombre = nombre;
        this._jugadores = jugadores;
        this._partidos = partidos;
    }

    getNombre(): string {
        return this._nombre;
    }

    getJugadores(): Jugador[] {
        return this._jugadores;
    }

    getClasificacion(): number {
        return this._clasificacion;
    }

    getPresupuesto(): number {
        return this._presupuesto;
    }

    getPartidos(): Equipo[] {
        return this._partidos;
    }
}