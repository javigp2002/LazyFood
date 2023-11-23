FROM denoland/deno:alpine

LABEL version="5.0.1"

LABEL authors="javgonper@correo.ugr.es"

USER deno

WORKDIR /home/deno

COPY deno.json deno.lock ./

RUN deno cache --lock=deno.lock deno.json

WORKDIR /app/test

ENTRYPOINT [ "deno", "task", "test"]