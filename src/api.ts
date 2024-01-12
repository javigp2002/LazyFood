import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { MyDb } from "../model/bd.ts";
import { ApiController } from "./api_controller.ts";
import { createCalendario } from "../test/bd_test.ts";

export const app = new Application();
const router = new Router();
const realDb = await Deno.openKv()
const calendar = createCalendario();

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
        
        const data = await ctx.request.body().value;
        const response = await apiController.postJugador(data);

        ctx.response.status = response;
        ctx.response.headers.set("Content-Type", "application/json");
        if (response == 201){
            ctx.response.body = {
                message: data,
            };
        }

    })

    .post("/equipo", async (ctx) => {
        const data = await ctx.request.body().value;

        const response = await apiController.postEquipo(data);
        ctx.response.status = response
        ctx.response.headers.set("Content-Type", "application/json");
        
        if (response == 201){
            ctx.response.body = {
                message: data,
            };
        }
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
