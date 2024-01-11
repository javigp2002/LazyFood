import { MyDb } from "../model/bd.ts";
import { Jugador } from "./jugador.ts";

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
        const info_player = await this.db.createJugador(body);

        const res = JSON.parse(JSON.stringify(info_player));
        res["status"] = info_player.ok ? 200 : 400;
        
        return res;
    }

    async postEquipo(body: any) {
        const info_team = await this.db.createEquipo(body);
        const res = JSON.parse(JSON.stringify(info_team));
        res["status"] = info_team.ok ? 200 : 400;
        return res;
    }

    async putJugador(nombreJugador: string, body: any) {
        const info_player = await this.db.updateJugador(nombreJugador, body);
        const res = JSON.parse(JSON.stringify(info_player));
        res["status"] = info_player.ok ? 200 : 400;
        
        return res;
    }

    async putEquipo(nombreEquipo: string, body: any) {
        const info_team = await this.db.updateEquipo(nombreEquipo, body);
        const res = JSON.parse(JSON.stringify(info_team));
        res["status"] = info_team.ok ? 200 : 400;
        return res;
    }
}