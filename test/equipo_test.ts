import { describe,it,beforeAll, afterAll } from "https://deno.land/std@0.204.0/testing/bdd.ts";
import { assert, assertInstanceOf } from "https://deno.land/std@0.205.0/assert/mod.ts";
import { Jugador } from "../src/jugador.ts";
import { Equipo } from "../src/equipo.ts";
import { EquipoReal } from "../src/equipo_real.ts";
import { Calendario } from "../src/calendario.ts";
import { MyConfig } from "../config/config.ts";
import { Logger } from "../logger/logger.ts";

describe("M1 - Jugador de venta óptimo", () => {
    let equipoDistintaPuntuacion: Equipo;
    
    const barcelona = new EquipoReal("Barcelona", 3);
    const realMadrid = new EquipoReal("Real Madrid", 2);
    const granada = new EquipoReal("Granada", 19);
    const mallorca = new EquipoReal("Mallorca", 14);

    const date: Date = new Date("2021-01-01");;
    const calendario: Calendario = new Calendario(new Map([
        [date, [{equipo1: barcelona, equipo2: realMadrid}, {equipo1: granada, equipo2: mallorca}]],
    ]));

    beforeAll(() => {
        const jugadoresPruebaDatos = [
            new Jugador("Callejon", [10, 10, 10, 10], [ 10000000, 10000000, 10000000, 10000000], granada),
            new Jugador("Uzuni", [5, 5, 5, 5], [10000000, 10000000,10000000,10000000], granada),
        ];

        equipoDistintaPuntuacion = new Equipo("equipoDistintaPuntuacion", jugadoresPruebaDatos, calendario);
        
        const logger = Logger.instance();
        const level_logger = MyConfig.instance().getLoggerLevel();
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

    JSON.parse(Deno.readTextFileSync("./test/datos_test.json")).forEach((equipoPruebaData: any) => {
        const jugadores: Jugador[] = [];

        equipoPruebaData.jugadores.forEach((jugador: any) => {
            const puntuaciones:number[] = jugador.puntuacionPorJornada;
            const valor:number[] = jugador.valor_por_jornada;
            const equipo:EquipoReal = new EquipoReal(jugador.equipo_al_que_pertenece.nombre, jugador.equipo_al_que_pertenece.puesto);

            jugadores.push(new Jugador(jugador.nombre, puntuaciones, valor, equipo));
        });
        const equipoPrueba = new Equipo (equipoPruebaData.nombre, jugadores, calendario)
        const indexJugadorOptimo: number[] = []

        equipoPruebaData.jugadores_optimos_nombre.forEach((jugadorOptimo: string) => {
            indexJugadorOptimo.push(jugadores.findIndex((jugador: Jugador) => jugador.getNombre() === jugadorOptimo));
        });


        it (`M1.- Es un jugador óptimo en: ${equipoPruebaData.titulo}`,  () => {
            assert(indexJugadorOptimo.includes(equipoPrueba.getJugadores().indexOf(equipoPrueba.getJugadorOptimo(date))));
        });


        it (`M1.- Comprobación de funcionamiento logger`,  () => {
            Logger.instance().getLogger().debug("Comprobación del logger");
            const logs = Logger.instance().getLogs();
            const log = logs?.[logs.length - 1];
            assert(log === "DEBUG Comprobación del logger");
        });
    });
});

