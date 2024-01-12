import { describe,it,beforeAll, beforeEach, afterAll } from "https://deno.land/std@0.204.0/testing/bdd.ts";
import { assert, assertInstanceOf, assertEquals } from "https://deno.land/std@0.205.0/assert/mod.ts";
import { app } from "../src/api.ts";
import { ApiController } from "../src/api_controller.ts";
import { MyDb } from "../model/bd.ts";
import  mockito  from "npm:ts-mockito";
import { Jugador } from "../src/jugador.ts";



describe ("M5 - Lógica de negocio API", async () => {        
    let underTest: ApiController;
    let myDb: MyDb;
    let mockedMyDb: MyDb;
    let unJugador: Jugador;
    
    beforeAll(() => {
        const mockedJugador = mockito.mock(Jugador);
        unJugador = mockito.instance(mockedJugador);
    });

    beforeEach(() => {
        mockedMyDb = mockito.mock(MyDb);
    });

    function createUnderTest() {
        myDb = mockito.instance(mockedMyDb);
        underTest = new ApiController(myDb);
    }

    it ("M5.1 - Testing Get (Jugador Óptimo)", async () => {
        //given
        mockito.when(mockedMyDb.getOptimo("equipo1")).thenResolve( unJugador);
        
        //when
        createUnderTest();
        const result = await underTest.getOptimo("equipo1");
    
        //then
        assertEquals(result, unJugador);        

    });

    it ("M5.2 - Testing Get (Jugador Óptimo)", async () => {
        mockito.when(mockedMyDb.getJugador("Rivaldo")).thenResolve("Rivaldo");

        createUnderTest();
        const result = await underTest.getJugador("Rivaldo");

        assertEquals(result, "Rivaldo");
    });

    it ("M5.3 - Testing Get (Jugador Óptimo vacio)", async () => {
        //when
        const result = await underTest.getOptimo("   ");

        //then
        assertEquals(result,  null);

    });
});
