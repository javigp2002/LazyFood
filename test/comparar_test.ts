
import { describe,it,beforeAll } from "bdd";
import { assert } from "mod";
import { Jugador } from "../src/jugador.ts";
import { Equipo } from "../src/equipo.ts";
import { equipoReal } from "../src/equipo_real.ts";
import { Calendario } from "../src/calendario.ts";

describe("M1 - Jugador de venta óptimo", () => {
    
    let equipo: Equipo;
    let equipoDistintaPuntuacion: Equipo;
    let equipoDistintoPartidoSiguiente: Equipo;
    let equipoDistintoPuntuacionYPartido: Equipo;
    

    function eligeJugadorAlAzar(equipo: Equipo): Jugador {
        const jugadores = equipo.getJugadores();
        const indice = Math.floor(Math.random() * jugadores.length);
        return jugadores[indice];
    }

    function esJugador(jugador:Jugador): boolean {
        return jugador instanceof Jugador;
    }

    
    beforeAll(() => {
        const barcelona = new equipoReal("Barcelona", 3);
        const realMadrid = new equipoReal("Real Madrid", 2);
        const granada = new equipoReal("Granada", 19);
        const mallorca = new equipoReal("Mallorca", 14);

        const calendario = new Calendario(new Map([
            [new Date("2021-01-01"), [{equipo1: barcelona, equipo2: realMadrid}]],
            [new Date("2021-01-02"), [{equipo1: granada, equipo2: mallorca}]],
        ]));

        const jugadores = [
            new Jugador("Cancelo", [5,2,9,1], [46274326, 46524672, 46862004, 47270776], barcelona),
            new Jugador("Carvajal", [8, 2, 10, 10], [38745447, 38401924, 37997622, 37622406], realMadrid),
            new Jugador("Zaragoza", [0, 11, 3, 13], [ 43137362, 43198145, 43229697, 43159052], granada),
            new Jugador("Darder", [5, 7, 4, 7], [14926769, 14754528,14595744,14382815], mallorca),
        ];

        equipo = new Equipo("EquipoComplejo", jugadores);

        const jugadoresDistintaPuntuacion = [
            new Jugador("Callejon", [10, 10, 10, 10], [ 10000000, 10000000, 10000000, 10000000], granada),
            new Jugador("Uzuni", [5, 5, 5, 5], [10000000, 10000000,10000000,10000000], granada),

        ];

        const jugadoresDistintoPartidoSiguiente = [
            new Jugador("Kroos", [1, 1, 1, 1], [40000000, 40000000, 40000000, 40000000], realMadrid),
            new Jugador("Gavi", [1,1,1,1], [40000000, 40000000, 40000000, 40000000], barcelona),
            new Jugador("Modric", [1, 1, 1, 1], [40000000, 40000000, 40000000, 40000000], realMadrid),
            new Jugador("Pedri", [1,1,1,1], [40000000, 40000000, 40000000, 40000000], barcelona),

        ];

        const jugadoresDistintaPuntuacionYPartido = [
            new Jugador("Gavi", [1,1,1,1], [40000000, 40000000, 40000000, 40000000], barcelona),
            new Jugador("Kroos", [1, 1, 1, 1], [40000000, 40000000, 40000000, 40000000], realMadrid),
            new Jugador("Modric", [1, 1, 1, 1], [40000000, 40000000, 40000000, 40000000], realMadrid),
            new Jugador("Pedri", [0,1,0,1], [40000000, 40000000, 40000000, 40000000], barcelona),

        ];

        equipoDistintaPuntuacion = new Equipo("equipoDistintaPuntuacion", jugadoresDistintaPuntuacion);
        equipoDistintoPartidoSiguiente = new Equipo("equipoDistintoPartidoSiguiente", jugadoresDistintoPartidoSiguiente);
        equipoDistintoPuntuacionYPartido = new Equipo("equipoDistintoPuntuacionYPartido", jugadoresDistintaPuntuacionYPartido);
    });

    it ("M1.1 - Es un jugador", () => {
        assert(esJugador(equipo.getJugadorOptimo()));
    });

    it ("M1.2 - Es un jugador del equipo", () => {
        const jugador = equipo.getJugadorOptimo();
        assert(equipo.getJugadores().includes(jugador));
    });

    it ("M1.3 - La puntuación del jugador devuelve un integer", () => {
        const jugador = equipo.getJugadorOptimo();
        assert(Number.isInteger(jugador.getPuntuacionPorJornada()[0]));
    });

    it ("M1.4 - Valor de mercado del jugador es integer", () => {
        const jugador = equipo.getJugadorOptimo();
        assert(Number.isInteger(jugador.getValorPorJornada()[0]));
    });

    it ("M1.5 - La función no tarda más de 1 segundo", () => {
        const start = performance.now();
        equipo.getJugadorOptimo();
        const end = performance.now();
        assert(end - start < 1000);
    });

    
});

