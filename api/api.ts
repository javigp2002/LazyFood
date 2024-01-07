import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { createBd, getOptimo, getJugadores, getJugador, postJugador, postEquipo, putJugador, putEquipo, deleteEquipo, deleteJugador } from "../model/bd.ts";

export const app = new Application();
const router = new Router();
await createBd();


router
    .get("/equipo/:nombreEquipo", async (ctx) => {
        const { nombreEquipo } = ctx.params;  
        
        const res = await getOptimo(nombreEquipo)
        ctx.response.headers.set("Content-Type", "application/json");
        ctx.response.body = {
            message: res,
         };
    })

    .get("/equipo/:nombreEquipo/jugadores", async (ctx) => {
        const { nombreEquipo } = ctx.params;

        const res = await getJugadores(nombreEquipo)
        ctx.response.headers.set("Content-Type", "application/json");
        ctx.response.body = {
            message: res,
         };
    })  

    .get("/jugador/:nombreJugador", async(ctx) => {
        const { nombreJugador } = ctx.params;

        const res = await getJugador(nombreJugador);
        ctx.response.headers.set("Content-Type", "application/json");
        ctx.response.body = {
            message: res,
         };

    })  

    .get("/equiporeal/:nombreEquipoReal", (ctx) => {
        const { nombreJugador } = ctx.params;

        ctx.response.body = {  }; 
    })  


    .post("/jugador", async (ctx) => {
        
        const body = await ctx.request.body().value;
        
        const res = await postJugador(body);

        ctx.response.headers.set("Content-Type", "application/json");
        ctx.response.body = {
            message: res,
         };

    })

    .post("/equipo", async (ctx) => {
        const body = await ctx.request.body().value;
        
        const res = await postEquipo(body);

        ctx.response.headers.set("Content-Type", "application/json");
        ctx.response.body = {
            message: res,
         };
    })

    .put("/jugador/:nombreJugador", async (ctx) => {
        const { nombreJugador } = ctx.params;
        const body = await ctx.request.body().value;

        const res = await putJugador(nombreJugador, body);

        ctx.response.headers.set("Content-Type", "application/json");
        ctx.response.body = {
            message: res,
         };
    })

    .put("/equipo/:nombreEquipo", async (ctx) => {
        const { nombreEquipo } = ctx.params;
        const body = await ctx.request.body().value;
        const res = await putEquipo(nombreEquipo, body);

        ctx.response.headers.set("Content-Type", "application/json");
        ctx.response.body = {
            message: res,
         };
    })

    .delete("/jugador/:nombreJugador", async (ctx) => {
        const { nombreJugador } = ctx.params;

        const res = await deleteJugador(nombreJugador);

        ctx.response.headers.set("Content-Type", "application/json");
        ctx.response.body = {
            message: res,
         };
    })

    .delete("/equipo/:nombreEquipo", async (ctx) => {
        const { nombreEquipo } = ctx.params;
        const res = await deleteEquipo(nombreEquipo);

        ctx.response.headers.set("Content-Type", "application/json");
        ctx.response.body = {
            message: res,
         };
    });


app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port: 8000 });
