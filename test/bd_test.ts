import { describe,it,beforeAll } from "https://deno.land/std@0.204.0/testing/bdd.ts";
import { assert, assertInstanceOf, assertEquals } from "https://deno.land/std@0.205.0/assert/mod.ts";
import { createBd, deleteEquipo, deleteJugador, getEquipos, getJugador, getOptimo, postEquipo, postJugador, putEquipo, putJugador, IEquipo, crearCalendario } from "../model/bd.ts";
import { isErrorStatus } from "https://deno.land/std@0.200.0/http/http_status.ts";


describe ("M3 - Bd", () => {

    it ("M3.1 - Creacion Base de datos", async () => {
        const res = await createBd();
        assert(res != null);
    });

    it ("M3.2 - Coger óptimo", async () => {
        const jugador = (await getOptimo("equipo1"));

        assertEquals(jugador.getNombre(), "Gavi");
    });

    it ("M3.3 - Coger Jugador", async () => {
        const jugador = (await getJugador("Gavi"));

        assertEquals(jugador, "Gavi");
    });

    it ("M3.4 - Crear Jugador", async () => {
        const jugador = (await postJugador(JSON.parse('{"nombre": "Uzuki", "puntuacionPorJornada": [5,5,5,5],"valor_por_jornada": [10000000,10000000,10000000,10000000],"equipo_al_que_pertenece": {"nombre": "granada","puesto": 20}}')));

        assert(jugador.ok);
    });

    it ("M3.5 - Crear Equipo", async () => {
        const equipos = (await postEquipo(JSON.parse('{"nombre": "equipoPrueba", "jugadores": [{"nombre": "Uzuki", "puntuacionPorJornada": [5,5,5,5],"valor_por_jornada": [10000000,10000000,10000000,10000000],"equipo_al_que_pertenece": {"nombre": "granada","puesto": 20}}, {"nombre": "Carlos", "puntuacionPorJornada": [5,5,5,5],"valor_por_jornada": [10000000,10000000,10000000,10000000],"equipo_al_que_pertenece": {"nombre": "granada","puesto": 20}}]}')));

        assert(equipos.ok);
    });


    it ("M3.6 - Modificar jugador", async () => {
        const jugador = (await putJugador("Uzuki", JSON.parse('{"valor_por_jornada": [20000000,20000000,10000000,10000000]}')));
        assert(jugador.ok == true);
    });

    it ("M3.7 - Modificar Equipo", async () => {
        const equipo = (await putEquipo("equipoPrueba", JSON.parse('{"jugadores": [{"nombre": "Carlos", "puntuacionPorJornada": [5,5,5,5],"valor_por_jornada": [10000000,10000000,10000000,10000000],"equipo_al_que_pertenece": {"nombre": "granada","puesto": 20}}]}')));
        assert(equipo.ok);
    });

    it ("M3.8 - Comprobar que las interfaces tengan unos parámetros establecidos", () => {
        
        const calendar = crearCalendario();
        const equipo: IEquipo = {
            nombre: "equipoPrueba",
            jugadores: [{
                nombre: "Carlos",
                puntuacionPorJornada: [5,5,5,5],
                valor_por_jornada: [10000000,10000000,10000000,10000000],
                equipo_al_que_pertenece: {
                    nombre: "granada",
                    puesto: 20
                }
            }],
            calendario: calendar
        }

        assertEquals(equipo.nombre, "equipoPrueba");
        assertEquals(equipo.jugadores[0].nombre, "Carlos");
        assertEquals(equipo.jugadores[0].puntuacionPorJornada, [5,5,5,5]);
        assertEquals(equipo.jugadores[0].valor_por_jornada, [10000000,10000000,10000000,10000000]);
        assertEquals(equipo.jugadores[0].equipo_al_que_pertenece.nombre, "granada");
        assertEquals(equipo.jugadores[0].equipo_al_que_pertenece.puesto, 20);

    });


});