import { describe,it,beforeAll, afterAll } from "https://deno.land/std@0.204.0/testing/bdd.ts";
import { assert, assertInstanceOf, assertEquals } from "https://deno.land/std@0.205.0/assert/mod.ts";
import { MyDb } from "../model/bd.ts";
import { EquipoReal } from "../src/equipo_real.ts";
import { Calendario } from "../src/calendario.ts";
import { assertFalse } from "https://deno.land/std@0.205.0/assert/assert_false.ts";


describe ("M3 - Bd", async () => {
    let db: MyDb;
    

    beforeAll(async () => {
        const kv = await createDbForTestingFromJson("./test/datos_test_bd.json");
        db = new MyDb(kv, createCalendario());
    });


    it ("M3.1 - Creacion Base de datos", () => {
        assert(db != null);
    });

    it ("M3.2 - Coger óptimo", async () => {
        const result = await db.getOptimo("equipo1", new Date("2021-01-01"));

        assertEquals(result.getNombre(), "Gavi");
    });

    it ("M3.3 - Coger Jugador", async () => {
        const jugador = await db.getJugador("Gavi");

        assertEquals(jugador, "Gavi");
    });

    it ("M3.4 - Crear Jugador", async () => {
        const result = await db.createJugador(JSON.parse('{"nombre": "Moradona", "puntuacionPorJornada": [5,5,5,5],"valor_por_jornada": [10000000,10000000,10000000,10000000],"equipo_al_que_pertenece": {"nombre": "granada","puesto": 20}}'));
        assert(result);
        await db.deleteJugador("Moradona");

    });

    it ("M3.4.1 - Crear Jugador, creado", async () => {
        const result = await db.createJugador(JSON.parse('{"nombre": "Pedri", "puntuacionPorJornada": [5,5,5,5],"valor_por_jornada": [10000000,10000000,10000000,10000000],"equipo_al_que_pertenece": {"nombre": "granada","puesto": 20}}'));
        assertFalse(result);

    });

    it ("M3.5 - Crear Equipo", async () => {
        assert(await db.createEquipo(JSON.parse('{"nombre": "galacticos", "jugadores": [{"nombre": "Uzuki", "puntuacionPorJornada": [5,5,5,5],"valor_por_jornada": [10000000,10000000,10000000,10000000],"equipo_al_que_pertenece": {"nombre": "granada","puesto": 20}}, {"nombre": "Carlos", "puntuacionPorJornada": [5,5,5,5],"valor_por_jornada": [10000000,10000000,10000000,10000000],"equipo_al_que_pertenece": {"nombre": "granada","puesto": 20}}]}')));
        await db.deleteEquipo("galacticos");

    });

    it ("M3.5.1 - Crear Equipo, Creado...", async () => {
        assertFalse( await db.createEquipo(JSON.parse('{"nombre": "equipo1", "jugadores": [{"nombre": "Uzuki", "puntuacionPorJornada": [5,5,5,5],"valor_por_jornada": [10000000,10000000,10000000,10000000],"equipo_al_que_pertenece": {"nombre": "granada","puesto": 20}}, {"nombre": "Carlos", "puntuacionPorJornada": [5,5,5,5],"valor_por_jornada": [10000000,10000000,10000000,10000000],"equipo_al_que_pertenece": {"nombre": "granada","puesto": 20}}]}')));
    });

    it ("M3.6 - Modificar jugador", async () => {
        const jugador = (await db.updateJugador("Pedri", JSON.parse('{"valor_por_jornada": [20000000,20000000,10000000,10000000]}')));
        assert(jugador.ok);
    });

    it ("M3.7 - Modificar Equipo", async () => {
        const equipo = (await db.updateEquipo("equipo1", JSON.parse('{"jugadores": [{"nombre": "Carlos", "puntuacionPorJornada": [5,5,5,5],"valor_por_jornada": [10000000,10000000,10000000,10000000],"equipo_al_que_pertenece": {"nombre": "granada","puesto": 20}}]}')));
        assert(equipo.ok);
    });

    afterAll(async () => {
        await db.clear(); 
    });


});

async function createDbForTestingFromJson(json:string): Promise<Deno.Kv>{
    const kv = await Deno.openKv();

    const promises = JSON.parse(Deno.readTextFileSync(json)).map(async (datos: any) => {
        await kv.set(datos.key, datos.value);
    });

    await Promise.all(promises);
    
    return kv;
}

export function createCalendario(){
    const date: Date = new Date("2089-01-01");
    const barcelona = new EquipoReal("Barcelona", 3);
    const realMadrid = new EquipoReal("Real Madrid", 2);
    const granada = new EquipoReal("Granada", 19);
    const mallorca = new EquipoReal("Mallorca", 14);
    const calendario: Calendario = new Calendario(new Map([
        [date, [{equipo1: barcelona, equipo2: realMadrid}, {equipo1: granada, equipo2: mallorca}]],
    ]));

    return calendario;
}
