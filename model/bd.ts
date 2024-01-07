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

const kv = await Deno.openKv();
const date: Date = new Date("2021-01-01");;
const nombreEquiposKv = "equipos";
const nombreJugadoresKv = "jugadores";

export  async function createBd() {

    const key = [nombreEquiposKv, "equipo1"]
    const value = {
        "jugadores": [
            {
                "nombre": "Callejon",
                "puntuacionPorJornada": [
                    10,
                    10,
                    10,
                    10
                ],
                "valor_por_jornada": [
                    10000000,
                    10000000,
                    10000000,
                    10000000
                ],
                "equipo_al_que_pertenece": {
                    "nombre": "granada",
                    "puesto": 20
                }
            },
            {
                "nombre": "Uzuni",
                "puntuacionPorJornada": [
                    5,
                    5,
                    5,
                    5
                ],
                "valor_por_jornada": [
                    10000000,
                    10000000,
                    10000000,
                    10000000
                ],
                "equipo_al_que_pertenece": {
                    "nombre": "granada",
                    "puesto": 20
                }
            },
            {
                "nombre": "Gavi",
                "puntuacionPorJornada": [
                    1,
                    1,
                    1,
                    1
                ],
                "valor_por_jornada": [
                    40000000,
                    40000000,
                    40000000,
                    40000000
                ],
                "equipo_al_que_pertenece": {
                    "nombre": "barcelona",
                    "puesto": 3
                }
            }
        ]    
    };
    
    await kv.set(key, value);

    return kv.get(key);
};

const barcelona = new EquipoReal("Barcelona", 3);
const realMadrid = new EquipoReal("Real Madrid", 2);
const granada = new EquipoReal("Granada", 19);
const mallorca = new EquipoReal("Mallorca", 14);

export function crearCalendario(){
    const calendario: Calendario = new Calendario(new Map([
        [date, [{equipo1: barcelona, equipo2: realMadrid}, {equipo1: granada, equipo2: mallorca}]],
    ]));

    return calendario;
}

export async function getEquipos(equipo: string) {
    return await kv.get([nombreEquiposKv, equipo]);
    
}

export async function getJugadores(equipo: string) {
    return await kv.get([nombreEquiposKv, equipo]);
}

export async function getOptimo(equipo: string) {
    const res = await kv.get([nombreEquiposKv, equipo]);
    const iTeam: IEquipo = res.value as IEquipo;
    const jugadores: Jugador[] = []

    iTeam.jugadores.forEach((jugador) => {
        jugadores.push(new Jugador(jugador.nombre, jugador.puntuacionPorJornada, jugador.valor_por_jornada, new EquipoReal(jugador.equipo_al_que_pertenece.nombre, jugador.equipo_al_que_pertenece.puesto)));
    });

    const team = new Equipo(iTeam.nombre, jugadores, crearCalendario());

    return team.getJugadorOptimo(date);

}

export async function getJugador(jugadorABuscar: string) {
    const equipos = await kv.list({prefix: [nombreEquiposKv]});
    let jugadorEncontrado = ""

    for await (const { key, value } of equipos) {
        const iTeam: IEquipo = value as IEquipo;
        iTeam.jugadores.forEach((jugador) => {
            if (jugador.nombre === jugadorABuscar){
                jugadorEncontrado = jugadorABuscar;
            }
        });
    }

    return jugadorEncontrado;

}

export async function postJugador(body: any){
    return await kv.set([nombreJugadoresKv, body.nombre], body);
}

export async function postEquipo(body: any){
    return await kv.set([nombreEquiposKv, body.nombre], body);
}

export async function putJugador(nombreJugador:string, body: any){
    if (kv.get([nombreJugadoresKv, nombreJugador]) == null){
        return JSON.parse('{"ok": false}');
    }

    const res = await kv.get([nombreJugadoresKv, nombreJugador]);


    const jugador = res.value as IJugador;
    for (const key in body) {
        switch (key) {
            case "nombre":
                jugador.nombre = body.nombre;
                break;
            case "puntuacionPorJornada":
                jugador.puntuacionPorJornada = body.puntuacionPorJornada;
                break;
            case "valor_por_jornada":
                jugador.valor_por_jornada = body.valor_por_jornada;
                break;
            case "equipo_al_que_pertenece":
                jugador.equipo_al_que_pertenece = body.equipo_al_que_pertenece;
                break;
            default:
                break;
        }
    }

    await kv.delete([nombreJugadoresKv, nombreJugador]);
    return await kv.set([nombreJugadoresKv, nombreJugador], JSON.parse(JSON.stringify(jugador)));
}

export async function putEquipo(nombreEquipo:string, body: any){
    if (kv.get([nombreEquiposKv, nombreEquipo]) == null){
        return JSON.parse('{"ok": false}');
    }

    const res = await kv.get([nombreEquiposKv, nombreEquipo]);

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
    await kv.delete([nombreEquiposKv, nombreEquipo]);
    return await kv.set([nombreEquiposKv, nombreEquipo], JSON.parse(JSON.stringify(equipo)));
}

export async function deleteJugador(jugador: string){
    if (kv.get([nombreJugadoresKv, jugador]) == null){
        return JSON.parse('{"ok": false}');
    }

    return await kv.delete([nombreJugadoresKv, jugador]);
}

export async function deleteEquipo(equipo: string){
    if (kv.get([nombreEquiposKv, equipo]) == null){
        return JSON.parse('{"ok": false}');
    }

    return await kv.delete([nombreEquiposKv, equipo]);
}

