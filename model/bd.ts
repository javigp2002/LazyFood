import { Calendario } from "../src/calendario.ts";
import { EquipoReal } from "../src/equipo_real.ts";
import { Jugador } from "../src/jugador.ts";
import { Equipo } from "../src/equipo.ts";
    
export interface IEquipo {
    nombre: string;
    jugadores: IJugador[];
    calendario: Calendario;
}

interface IJugador {
    nombre: string;
    puntuacionPorJornada: number[];
    valor_por_jornada: number[];
    equipo_al_que_pertenece: IEquipoReal;
}

interface IEquipoReal {
    nombre: string;
    puesto: number;
}

const nombreEquiposKv = "equipos";
const nombreJugadoresKv = "jugadores";


export class MyDb{
    constructor(private kv: Deno.Kv, private calendario: Calendario){}


    async existeEquipo(equipo: string): Promise<boolean> {
        const res= await this.kv.get([nombreEquiposKv, equipo]);
        return res.value != null;
    }

    async existeJugador(jugador: string): Promise<boolean> {
        const res= await this.kv.get([nombreJugadoresKv, jugador]);
        return res.value != null;

    }

    async getJugadores(equipo: string) {
        const res = await this.kv.get([nombreEquiposKv, equipo]);
        return await this.kv.get([nombreEquiposKv, equipo]);
    }
    

    async getOptimo(equipo: string, date?:Date): Promise<Jugador> {
        const res = await this.kv.get([nombreEquiposKv, equipo]);
        const iTeam: IEquipo = res.value as IEquipo;
        const jugadores: Jugador[] = []

        iTeam.jugadores.forEach((jugador) => {
            jugadores.push(new Jugador(jugador.nombre, jugador.puntuacionPorJornada, jugador.valor_por_jornada, new EquipoReal(jugador.equipo_al_que_pertenece.nombre, jugador.equipo_al_que_pertenece.puesto)));
        });

        const team = new Equipo(iTeam.nombre, jugadores, this.calendario);

        return team.getJugadorOptimo();

    }

     async getJugador(jugadorABuscar: string): Promise<string> {
        const equipos = await this.kv.list({prefix: [nombreEquiposKv]});
        let jugadorEncontrado = ""

        for await (const { value } of equipos) {
            const iTeam: IEquipo = value as IEquipo;
            iTeam.jugadores.forEach((jugador) => {
                if (jugador.nombre === jugadorABuscar){
                    jugadorEncontrado = jugadorABuscar;
                }
            });
        }

        return jugadorEncontrado;

    }

     async createJugador(data: any): Promise<boolean>{
        if (await this.existeJugador(data.nombre)){
            return false;
        }

        this.kv.set([nombreJugadoresKv, data.nombre], data);
        return true;
    }

     async createEquipo(data: any): Promise<boolean>{
        if (await this.existeEquipo(data.nombre)){
            return false;
        }
        await this.kv.set([nombreEquiposKv, data.nombre], data);
        return true;
    }

     async updateJugador(nombreJugador:string, data: any){
        if (! await this.existeJugador(nombreJugador)){
            return {ok: false};
        }
        

        const res = await this.kv.get([nombreJugadoresKv, nombreJugador]);


        const jugador = res.value as IJugador;
        for (const key in data) {
            switch (key) {
                case "nombre":
                    jugador.nombre = data.nombre;
                    break;
                case "puntuacionPorJornada":
                    jugador.puntuacionPorJornada = data.puntuacionPorJornada;
                    break;
                case "valor_por_jornada":
                    jugador.valor_por_jornada = data.valor_por_jornada;
                    break;
                case "equipo_al_que_pertenece":
                    jugador.equipo_al_que_pertenece = data.equipo_al_que_pertenece;
                    break;
                default:
                    break;
            }
        }

        await this.kv.delete([nombreJugadoresKv, nombreJugador]);
        const result = await this.kv.set([nombreJugadoresKv, nombreJugador], JSON.parse(JSON.stringify(jugador)));
        
        return result;
    }

     async updateEquipo(nombreEquipo:string, body: any){
        if (! await this.existeEquipo(nombreEquipo)){
            return {ok: false};
        }
        const res = await this.kv.get([nombreEquiposKv, nombreEquipo]);

        const equipo = res.value as IEquipo;
        for (const key in body) {
            switch (key) {
                case "nombre":
                    equipo.nombre = body.nombre;
                    break;
                case "jugadores":
                    equipo.jugadores = body.jugadores;
                    break;
                default:
                    break;
            }
        }
        await this.kv.delete([nombreEquiposKv, nombreEquipo]);
        return await this.kv.set([nombreEquiposKv, nombreEquipo], JSON.parse(JSON.stringify(equipo)));
    }

     async deleteJugador(jugador: string){
        if (! await this.existeJugador(jugador)){
            return {ok: false};
        }

        return await this.kv.delete([nombreJugadoresKv, jugador]);
    }

     async deleteEquipo(equipo: string){
        if (! await this.existeEquipo(equipo)){
            return {ok: false};
        }

        return await this.kv.delete([nombreEquiposKv, equipo]);
    }

    async clear(){
        await this.kv.delete([nombreEquiposKv]);
        await this.kv.delete([nombreJugadoresKv]);

        await this.kv.close();
    }

}

