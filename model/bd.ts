import { Calendario } from "../src/calendario.ts";

    
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
const nombreEquiposKv = "equipos";

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
