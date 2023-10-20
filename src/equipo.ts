import { Jugador } from './jugador';

export class Equipo {
    private _nombre: string;
    private _jugadores: Jugador[];

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

}