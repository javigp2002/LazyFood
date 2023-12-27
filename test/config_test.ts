import { describe,it,beforeAll } from "https://deno.land/std@0.204.0/testing/bdd.ts";
import { assert, assertInstanceOf } from "https://deno.land/std@0.205.0/assert/mod.ts";
import  config  from "npm:config";


describe ("M2 - Configuración", () => {

    it ("M2.1 - El nivel de log es DEBUG", () => {
        assert( config.get("logger.level") == "DEBUG");
    });

    it ("M2.2 - El handler de log es memory", () => {
        assert( config.get("logger.handler") == "memory");
    });
});