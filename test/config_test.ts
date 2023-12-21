import { describe,it,beforeAll } from "https://deno.land/std@0.204.0/testing/bdd.ts";
import { assert, assertInstanceOf } from "https://deno.land/std@0.205.0/assert/mod.ts";
import { MyConfig } from "../config/config.ts";

describe ("M2 - Configuración", () => {

    it ("M2.1 - El nivel de log es DEBUG", () => {
        assert(MyConfig.instance().getLoggerLevel() == "DEBUG");
    });

    it ("M2.2 - El handler de log es memory", () => {
        assert(MyConfig.instance().getLoggerHandler()== "memory");
    });
});