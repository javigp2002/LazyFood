import { equipoReal } from "./equipo_real.ts";

type Enfrentamiento = {
    equipo1: equipoReal,
    equipo2: equipoReal,
}

export class Calendario{
    constructor(
        private jornadas: Map<Date, Enfrentamiento[]>)
        {}

    getJornadas(){
        return this.jornadas;
    }
}