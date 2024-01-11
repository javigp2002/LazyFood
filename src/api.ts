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
        const resultado = await apiController.postJugador(body);

        ctx.response.status = resultado.status;
        ctx.response.headers.set("Content-Type", "application/json");
        ctx.response.body = {
            message: resultado,
         };

    })

    .post("/equipo", async (ctx) => {
        const body = await ctx.request.body().value;

        const response = await apiController.postEquipo(body);
        ctx.response.status = response.status;
        ctx.response.headers.set("Content-Type", "application/json");
        ctx.response.body = {
            message: response,
         };
    })

    .put("/jugador/:nombreJugador", async (ctx) => {
        const { nombreJugador } = ctx.params;
        const body = await ctx.request.body().value;

        const response = await apiController.putJugador(nombreJugador, body);

        ctx.response.status = response.status;
        ctx.response.headers.set("Content-Type", "application/json");
        ctx.response.body = {
            message: response,
         };
    })

    .put("/equipo/:nombreEquipo", async (ctx) => {
        const { nombreEquipo } = ctx.params;
        const body = await ctx.request.body().value;

        const response = await apiController.putEquipo(nombreEquipo, body)

        ctx.response.status = response.status;
        ctx.response.headers.set("Content-Type", "application/json");
        ctx.response.body = {
            message: response,
         };
    })

app.use(router.routes());
app.use(router.allowedMethods());
