import { describe,it,beforeAll, beforeEach, afterAll } from "https://deno.land/std@0.204.0/testing/bdd.ts";
import { assert, assertInstanceOf, assertEquals } from "https://deno.land/std@0.205.0/assert/mod.ts";
import { superoak } from "https://deno.land/x/superoak/mod.ts";
import { app } from "../api/api.ts";

describe ("M4 - API", async () => {        

    it ("M4.1.1 - Conexión Get", async () => {
        const testClient = await superoak(app);

        await testClient.get("/equipo/equipo1").expect(200);
    });

    it ("M4.1.2 - Testing Get (Jugador Óptimo)", async () => {
        const testClient = await superoak(app);
        const nombreEquipo:JSON = (await testClient.get("/equipo/equipo1")).body;
        
        assert(JSON.stringify(nombreEquipo).includes("Gavi"));
    });

    it ("M4.2 - Testing Get (Jugadores)", async () => {
        const testClient = await superoak(app);
        const nombreEquipo:JSON = (await testClient.get("/equipo/equipo1/jugadores")).body;
        
        assert(JSON.stringify(nombreEquipo).includes("equipo1"));
    });

    it ("M4.3 - Testing Get (Nombre Jugador)", async () => {
        const testClient = await superoak(app);
        const nombreEquipo:JSON = (await testClient.get("/jugador/Gavi")).body;
        
        assert(JSON.stringify(nombreEquipo).includes("Gavi"));
    });


    it ("M4.4- Testing Post (Jugador)", async () => {
        const testClient = await superoak(app);
        assert (await testClient.post("/jugador")
            .set("Content-Type", "application/json")
            .send('{"nombre": "Uzuki", "puntuacionPorJornada": [5,5,5,5],"valor_por_jornada": [10000000,10000000,10000000,10000000],"equipo_al_que_pertenece": {"nombre": "granada","puesto": 20}}')
            .expect(200));
    
        
    });

    it ("M4.5- Testing Post (Equipo)", async () => {
        const testClient = await superoak(app);
        assert (await testClient.post("/equipo")
            .set("Content-Type", "application/json")
            .send('{"nombre": "equipoPrueba", "jugadores": [{"nombre": "Uzuki", "puntuacionPorJornada": [5,5,5,5],"valor_por_jornada": [10000000,10000000,10000000,10000000],"equipo_al_que_pertenece": {"nombre": "granada","puesto": 20}}, {"nombre": "Carlos", "puntuacionPorJornada": [5,5,5,5],"valor_por_jornada": [10000000,10000000,10000000,10000000],"equipo_al_que_pertenece": {"nombre": "granada","puesto": 20}}]}')
            .expect(200));
    });

    it ("M4.6- Testing PUT (Jugador)", async () => {
        const testClient = await superoak(app);
        assert (await testClient.put("/jugador/Uzuki")
            .set("Content-Type", "application/json")
            .send('{"valor_por_jornada": [20000000,20000000,10000000,10000000]}')
            .expect(200));
    });

    it ("M4.7- Testing PUT (Equipo)", async () => {
        const testClient = await superoak(app);
        assert (await testClient.put("/equipo/equipoPrueba")
            .set("Content-Type", "application/json")
            .send('{"jugadores": [{"nombre": "Carlos", "puntuacionPorJornada": [5,5,5,5],"valor_por_jornada": [10000000,10000000,10000000,10000000],"equipo_al_que_pertenece": {"nombre": "granada","puesto": 20}}]}')
            .expect(200));
    });

    it ("M4.8- Testing DELETE (Jugador)", async () => {
        const testClient = await superoak(app);
        assert (await testClient.delete("/jugador/Uzuki")
            .expect(200));
    });

    it ("M4.9- Testing DELETE (Equipo)", async () => {
        const testClient = await superoak(app);
        assert (await testClient.delete("/equipo/equipoPrueba")
            .expect(200));
    });
});