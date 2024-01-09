import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { MyDb, crearCalendario } from "../model/bd.ts";
import { ApiController } from "./api_controller.ts";

export const app = new Application();
const router = new Router();
const realDb = await Deno.openKv()
const calendar = crearCalendario();

const apiController = new ApiController(new MyDb(realDb, calendar));

router
    .get("/equipo/:nombreEquipo", async (ctx) => {
        const { nombreEquipo } = ctx.params;  
        
        ctx.response.headers.set("Content-Type", "application/json");
        ctx.response.body = {
            message: await apiController.getOptimo(nombreEquipo),
         };
    })

    .get("/equipo/:nombreEquipo/jugadores", async (ctx) => {
        const { nombreEquipo } = ctx.params;

        ctx.response.headers.set("Content-Type", "application/json");
        ctx.response.body = {
            message: await apiController.getJugadores(nombreEquipo),
         };
    })  

    .get("/jugador/:nombreJugador", async(ctx) => {
        const { nombreJugador } = ctx.params;

        ctx.response.headers.set("Content-Type", "application/json");
        ctx.response.body = {
            message: await apiController.getJugador(nombreJugador),
         };

    })  

    .post("/jugador", async (ctx) => {
        
        const body = await ctx.request.body().value;
                
        ctx.response.headers.set("Content-Type", "application/json");
        ctx.response.body = {
            message: await apiController.postJugador(body),
         };

    })

    .post("/equipo", async (ctx) => {
        const body = await ctx.request.body().value;
        
        ctx.response.headers.set("Content-Type", "application/json");
        ctx.response.body = {
            message: await apiController.postEquipo(body),
         };
    })

    .put("/jugador/:nombreJugador", async (ctx) => {
        const { nombreJugador } = ctx.params;
        const body = await ctx.request.body().value;

        ctx.response.headers.set("Content-Type", "application/json");
        ctx.response.body = {
            message: apiController.putJugador(nombreJugador, body),
         };
    })

    .put("/equipo/:nombreEquipo", async (ctx) => {
        const { nombreEquipo } = ctx.params;
        const body = await ctx.request.body().value;

        ctx.response.headers.set("Content-Type", "application/json");
        ctx.response.body = {
            message: apiController.putEquipo(nombreEquipo, body),
         };
    })

    .delete("/jugador/:nombreJugador", async (ctx) => {
        const { nombreJugador } = ctx.params;

        ctx.response.headers.set("Content-Type", "application/json");
        ctx.response.body = {
            message: apiController.deleteJugador(nombreJugador),
         };
    })

    .delete("/equipo/:nombreEquipo", async (ctx) => {
        const { nombreEquipo } = ctx.params;

        ctx.response.headers.set("Content-Type", "application/json");
        ctx.response.body = {
            message: apiController.deleteEquipo(nombreEquipo),
         };
    });


app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port: 8000 });
