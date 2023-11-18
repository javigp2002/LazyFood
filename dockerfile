FROM denoland/deno:alpine

LABEL maintainer="javgonper@correo.ugr.esS"

WORKDIR /app/test

COPY deno.json deno.lock ./

RUN chown -R deno:deno /app

USER deno

RUN deno cache --lock=deno.lock --reload --lock-write deno.json

ENTRYPOINT [ "deno", "task", "test", "test/equipo_test.ts" ]