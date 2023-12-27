import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();


router
    .get("/equipo/:nombreEquipo", (ctx) => {
        ctx.response.body = {  };
    })

    .get("/equipo/:nombreEquipo/jugadores", (ctx) => {
        const { nombreEquipo } = ctx.params;

        ctx.response.body = {  }; 
    })  

    .get("/jugador/:nombreJugador", (ctx) => {
        const { nombreJugador } = ctx.params;

        ctx.response.body = {  }; 
    })  

    .get("/equiporeal/:nombreEquipoReal", (ctx) => {
        const { nombreJugador } = ctx.params;

        ctx.response.body = {  }; 
    })  


    .post("/jugador/:nombreJugador", async (ctx) => {
        const body = await ctx.request.body().value;
        ctx.response.body = {  };
    })

    .post("/equipo/:nombreEquipo", async (ctx) => {
        const body = await ctx.request.body().value;
        ctx.response.body = {  };
    })

    .put("/jugador/:nombreJugador", async (ctx) => {
        const { nombreJugador } = ctx.params;
        const body = await ctx.request.body().value;
        ctx.response.body = {  };
    })

    .put("/equipo/:nombreEquipo", async (ctx) => {
        const { nombreEquipo } = ctx.params;
        const body = await ctx.request.body().value;
        ctx.response.body = {  };
    })


    .delete("/jugador/:nombreJugador", (ctx) => {
        const { nombreJugador } = ctx.params;
        ctx.response.body = { };
    })

    .delete("/equipo/:nombreEquipo", (ctx) => {
        const { nombreEquipo } = ctx.params;
        ctx.response.body = { };
    });

app.use(router.routes());
app.use(router.allowedMethods());
