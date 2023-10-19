import { Jugador } from './jugador';

class Equipo {
    private _nombre: string;
    private _jugadores: Jugador[];
    private _clasificacion: number;
    private _presupuesto: number;

    constructor(nombre: string, jugadores: Jugador[]){
        this._nombre = nombre;
        this._jugadores = jugadores;
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

}