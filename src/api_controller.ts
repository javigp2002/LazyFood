import { MyDb } from "../model/bd.ts";
import { Jugador } from "./jugador.ts";

export class ApiController {
    db: MyDb

    constructor(db: MyDb) {
        this.db = db;
    }

    async getOptimo(nombreEquipo: string): Promise<Jugador|null> {
        return await this.db.getOptimo(nombreEquipo);
        
    }

    async getJugadores(nombreEquipo: string) {
        return await this.db.getJugadores(nombreEquipo);

    }

    async getJugador(nombreJugador: string): Promise<string> {
        return await this.db.getJugador(nombreJugador);
        
    }

    async postJugador(body: any) {
        const is_created = await this.db.createJugador(body);
        return is_created ? 200 : 400;
        
    }

    async postEquipo(body: any) {
        const is_created = await this.db.createEquipo(body);
        return is_created ? 200 : 400;
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