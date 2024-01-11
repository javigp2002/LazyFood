import { describe,it,beforeAll, afterAll } from "https://deno.land/std@0.204.0/testing/bdd.ts";
import { assert, assertInstanceOf, assertEquals } from "https://deno.land/std@0.205.0/assert/mod.ts";
import { MyDb, crearCalendario, IEquipo } from "../model/bd.ts";
import { isErrorStatus } from "https://deno.land/std@0.200.0/http/http_status.ts";
import { assertIsError } from "https://deno.land/std@0.205.0/assert/assert_is_error.ts";


describe ("M3 - Bd", async () => {
    let db: MyDb;
    

    beforeAll(async () => {
        const kv = await createDbForTestingFromJson("./test/datos_test_bd.json");
        db = new MyDb(kv, crearCalendario());
    });


    it ("M3.1 - Creacion Base de datos", () => {
        assert(db != null);
    });

    it ("M3.2 - Coger óptimo", async () => {
        const result = await db.getOptimo("equipo1");

        assertEquals(result.getNombre(), "Gavi");
    });

    it ("M3.3 - Coger Jugador", async () => {
        const jugador = await db.getJugador("Gavi");

        assertEquals(jugador, "Gavi");
    });

    it ("M3.4 - Crear Jugador", async () => {
        const jugador = (await db.postJugador(JSON.parse('{"nombre": "Moradona", "puntuacionPorJornada": [5,5,5,5],"valor_por_jornada": [10000000,10000000,10000000,10000000],"equipo_al_que_pertenece": {"nombre": "granada","puesto": 20}}')));
        await db.deleteJugador("Moradona");
        assert(jugador.ok);

    });

    it ("M3.4.1 - Crear Jugador, creado", async () => {
        const jugador = (await db.postJugador(JSON.parse('{"nombre": "Pedri", "puntuacionPorJornada": [5,5,5,5],"valor_por_jornada": [10000000,10000000,10000000,10000000],"equipo_al_que_pertenece": {"nombre": "granada","puesto": 20}}')));
        assert(!jugador.ok);


    });

    it ("M3.5 - Crear Equipo", async () => {
        const equipos = (await db.postEquipo(JSON.parse('{"nombre": "galacticos", "jugadores": [{"nombre": "Uzuki", "puntuacionPorJornada": [5,5,5,5],"valor_por_jornada": [10000000,10000000,10000000,10000000],"equipo_al_que_pertenece": {"nombre": "granada","puesto": 20}}, {"nombre": "Carlos", "puntuacionPorJornada": [5,5,5,5],"valor_por_jornada": [10000000,10000000,10000000,10000000],"equipo_al_que_pertenece": {"nombre": "granada","puesto": 20}}]}')));
        await db.deleteEquipo("galacticos");
        assert(equipos.ok);

    });

    it ("M3.5.1 - Crear Equipo, Creado...", async () => {
        const equipos = (await db.postEquipo(JSON.parse('{"nombre": "equipo1", "jugadores": [{"nombre": "Uzuki", "puntuacionPorJornada": [5,5,5,5],"valor_por_jornada": [10000000,10000000,10000000,10000000],"equipo_al_que_pertenece": {"nombre": "granada","puesto": 20}}, {"nombre": "Carlos", "puntuacionPorJornada": [5,5,5,5],"valor_por_jornada": [10000000,10000000,10000000,10000000],"equipo_al_que_pertenece": {"nombre": "granada","puesto": 20}}]}')));

        assert(!equipos.ok);
    });

    it ("M3.6 - Modificar jugador", async () => {
        const jugador = (await db.putJugador("Pedri", JSON.parse('{"valor_por_jornada": [20000000,20000000,10000000,10000000]}')));
        assert(jugador.ok);
    });

    it ("M3.7 - Modificar Equipo", async () => {
        const equipo = (await db.putEquipo("equipo1", JSON.parse('{"jugadores": [{"nombre": "Carlos", "puntuacionPorJornada": [5,5,5,5],"valor_por_jornada": [10000000,10000000,10000000,10000000],"equipo_al_que_pertenece": {"nombre": "granada","puesto": 20}}]}')));
        assert(equipo.ok);
    });

    afterAll(async () => {
        await db.clear(); 
    });


});


async function createbdForTesting(): Promise<Deno.Kv>{
    const kv = await Deno.openKv();

    const key = ["equipos", "equipo1"];
    const value = {
        "jugadores": [
            {
                "nombre": "Callejon",
                "puntuacionPorJornada": [10,10,10,10],
                "valor_por_jornada": [10000000,10000000,10000000,10000000],
                "equipo_al_que_pertenece": {
                    "nombre": "granada",
                    "puesto": 20
                }
            },
            {
                "nombre": "Uzuni",
                "puntuacionPorJornada": [5,5,5,5],
                "valor_por_jornada": [10000000,10000000,10000000,10000000],
                "equipo_al_que_pertenece": {
                    "nombre": "granada",
                    "puesto": 20
                }
            },
            {
                "nombre": "Gavi",
                "puntuacionPorJornada": [1,1,1,1],
                "valor_por_jornada": [40000000,40000000,40000000,40000000],
                "equipo_al_que_pertenece": {
                    "nombre": "barcelona",
                    "puesto": 3
                }
            }
        ]    
    };
    
    await kv.set(key, value);

    const key2 = ["equipos", "equipo2"]
    const value2 = {
        "jugadores": [
            {
                "nombre": "Neva",
                "puntuacionPorJornada": [10,10,10,10],
                "valor_por_jornada": [10000000,10000000,10000000,10000000],
                "equipo_al_que_pertenece": {
                    "nombre": "granada",
                    "puesto": 20
                }
            },
            {
                "nombre": "Carlos",
                "puntuacionPorJornada": [5,5,5,5],
                "valor_por_jornada": [10000000,10000000,10000000,10000000],
                "equipo_al_que_pertenece": {
                    "nombre": "granada",
                    "puesto": 20
                }
            }

        ]    
    };

    await kv.set(key2, value2);
 
    await kv.set(["jugadores", "Pedri"], {"nombre": "Pedri", "puntuacionPorJornada": [5,5,5,5],"valor_por_jornada": [10000000,10000000,10000000,10000000],"equipo_al_que_pertenece": {"nombre": "granada","puesto": 20}});

    return kv;
}

async function createDbForTestingFromJson(json:string): Promise<Deno.Kv>{
    const kv = await Deno.openKv();

    const promises = JSON.parse(Deno.readTextFileSync(json)).map(async (datos: any) => {
        await kv.set(datos.key, datos.value);
    });

    await Promise.all(promises);
    
    return kv;
}
