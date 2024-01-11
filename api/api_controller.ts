import { MyDb } from "../model/bd.ts";
import { Jugador } from "../src/jugador.ts";

export class ApiController {
    db: MyDb

    constructor(db: MyDb) {
        this.db = db;
    }

    async getOptimo(nombreEquipo: string): Promise<Jugador|null> {
        const res = await this.db.getOptimo(nombreEquipo);
        return res;
    }

    async getJugadores(nombreEquipo: string) {
        const res = await this.db.getJugadores(nombreEquipo);
        return res;
    }

    async getJugador(nombreJugador: string): Promise<string> {
        const res = await this.db.getJugador(nombreJugador);
        return res;
    }

    async postJugador(body: any) {
        const res = await this.db.createJugador(body);
        return res;
    }

    async postEquipo(body: any) {
        const res = await this.db.createEquipo(body);
        return res;
    }

    async putJugador(nombreJugador: string, body: any) {
        const res = await this.db.updateJugador(nombreJugador, body);
        return res;
    }

    async putEquipo(nombreEquipo: string, body: any) {
        if (await this.db.existeEquipo(nombreEquipo) == false) {
            return { ok: false, error: "El equipo no existe" };
        }
        const res = await this.db.updateEquipo(nombreEquipo, body);
        return res;
    }
}