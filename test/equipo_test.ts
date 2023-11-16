import { describe,it,beforeAll } from "https://deno.land/std@0.204.0/testing/bdd.ts";
import { assert, assertInstanceOf } from "https://deno.land/std@0.205.0/assert/mod.ts";
import { Jugador } from "../src/jugador.ts";
import { Equipo } from "../src/equipo.ts";
import { EquipoReal } from "../src/equipo_real.ts";
import { Calendario } from "../src/calendario.ts";

describe("M1 - Jugador de venta óptimo", () => {
    
    let equipoDistintaPuntuacion: Equipo;
    let equipoDistintoPartidoSiguiente: Equipo;
    let equipoDistintoPuntuacionYPartido: Equipo;
    let equipoDistintoValorMercado: Equipo;
    let date: Date;

    beforeAll(() => {
        const barcelona = new EquipoReal("Barcelona", 3);
        const realMadrid = new EquipoReal("Real Madrid", 2);
        const granada = new EquipoReal("Granada", 19);
        const mallorca = new EquipoReal("Mallorca", 14);

        date = new Date("2021-01-01");

        const calendario = new Calendario(new Map([
            [date, [{equipo1: barcelona, equipo2: realMadrid}, {equipo1: granada, equipo2: mallorca}]],
        ]));

        const jugadoresDistintaPuntuacion = [
            new Jugador("Callejon", [10, 10, 10, 10], [ 10000000, 10000000, 10000000, 10000000], granada),
            new Jugador("Uzuni", [5, 5, 5, 5], [10000000, 10000000,10000000,10000000], granada),

        ];

        const jugadoresDistintoPartidoSiguiente = [
            new Jugador("Gavi", [1, 1, 1, 1], [40000000, 40000000, 40000000, 40000000], barcelona),
            new Jugador("Modric", [1, 1, 1, 1], [40000000, 40000000, 40000000, 40000000], realMadrid),
            new Jugador("Pedri", [1, 1, 1, 1], [40000000, 40000000, 40000000, 40000000], barcelona),

        ];

        const jugadoresDistintaPuntuacionYPartido = [
            new Jugador("Gavi", [1,1,1,1], [40000000, 40000000, 40000000, 40000000], barcelona),
            new Jugador("Kroos", [1, 1, 1, 1], [40000000, 40000000, 40000000, 40000000], realMadrid),
            new Jugador("Pedri", [0,1,0,1], [40000000, 40000000, 40000000, 40000000], barcelona),
        ];

        const jugadoresDistintosValoresMercado = [
            new Jugador("Gavi", [1,1,1,1], [10000000, 10000000, 10000000, 10000000], barcelona),
            new Jugador("Iniesta", [1, 1, 1, 1], [30000000, 30000000, 30000000, 30000000], barcelona),
            new Jugador("Pedri", [1,1,1,1], [10000000, 10000000, 10000000, 10000000], barcelona),
        ];


        equipoDistintaPuntuacion = new Equipo("equipoDistintaPuntuacion", jugadoresDistintaPuntuacion, calendario);
        equipoDistintoPartidoSiguiente = new Equipo("equipoDistintoPartidoSiguiente", jugadoresDistintoPartidoSiguiente, calendario);
        equipoDistintoPuntuacionYPartido = new Equipo("equipoDistintoPuntuacionYPartido", jugadoresDistintaPuntuacionYPartido, calendario);
        equipoDistintoValorMercado = new Equipo("equipoDistintoValorMercado", jugadoresDistintosValoresMercado, calendario);

    });

    it ("M1.1 - Es un jugador", () => {
        assertInstanceOf(equipoDistintaPuntuacion.getJugadorOptimo(date), Jugador);
    });

    it ("M1.2 - Es un jugador del equipo", () => {
        const jugador = equipoDistintaPuntuacion.getJugadorOptimo(date);
        assert(equipoDistintaPuntuacion.getJugadores().includes(jugador));
    });

    it ("M1.3 - La puntuación del jugador devuelve un integer", () => {
        const jugador = equipoDistintaPuntuacion.getJugadorOptimo(date);
        assert(Number.isInteger(jugador.getPuntuacionPorJornada()[0]));
    });

    it ("M1.4 - Valor de mercado del jugador es integer", () => {
        const jugador = equipoDistintaPuntuacion.getJugadorOptimo(date);
        assert(Number.isInteger(jugador.getValorPorJornada()[0]));
    });

    it ("M1.5 - La función no tarda más de 1 segundo", () => {
        const start = performance.now();
        equipoDistintaPuntuacion.getJugadorOptimo(date);
        const end = performance.now();
        assert(end - start < 1000);
    });


    it ("M1.6 - El jugador es el mejor a vender: distinta puntuacion", () => {
        const jugador = equipoDistintaPuntuacion.getJugadorOptimo(date);
        assert(jugador === equipoDistintaPuntuacion.getJugadores()[0]);
    
    });

    it ("M1.7 - El jugador es el mejor a vender: siguiente partido", () => {
        const jugador = equipoDistintoPartidoSiguiente.getJugadorOptimo(date);
        assert(jugador === equipoDistintoPartidoSiguiente.getJugadores()[0] ||
            jugador === equipoDistintoPartidoSiguiente.getJugadores()[2]);
    
        });

    it ("M1.8 - El jugador es el mejor a vender: distinta puntuacion y partido", () => {
        const jugador = equipoDistintoPuntuacionYPartido.getJugadorOptimo(date);
        assert(jugador === equipoDistintoPuntuacionYPartido.getJugadores()[2]);
    
    });    

    it ("M1.9 - El jugador es el mejor a vender: mayor valor en mercado", () => {
        const jugador = equipoDistintoValorMercado.getJugadorOptimo(date);
        assert(jugador === equipoDistintoValorMercado.getJugadores()[1]);
    
    });  
});

