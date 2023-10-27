import { equipoReal } from "./equipo_real";

type Enfrentamiento = {
    equipo1: equipoReal,
    equipo2: equipoReal,
}

export class Calendario{
    jornadas: Map<Date, Enfrentamiento[]>;

    constructor(jornadas: Map<Date, Enfrentamiento[]>){
        this.jornadas = jornadas;
    }

    getJornadas(){
        return this.jornadas;
    }
}