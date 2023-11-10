import { EquipoReal } from "./equipo_real.ts";

type Enfrentamiento = {
    equipo1: EquipoReal,
    equipo2: EquipoReal,
}

export class Calendario{
    constructor(
        private jornadas: Map<Date, Enfrentamiento[]>)
        {}

    public getJornadas(){
        return this.jornadas;
    }

    public getSiguienteEnfrentamientoEquipo(fecha: Date, equipoReal: EquipoReal): EquipoReal{
        let siguienteEnfrentamientoEquipoReal: EquipoReal = new EquipoReal("NULL", 21);
        for (let [key,value] of this.jornadas.entries()){
            if (key == fecha){
                for (let i=0; i<value.length; i++){
                    if (value[i].equipo1 == equipoReal){
                        siguienteEnfrentamientoEquipoReal = value[i].equipo2
                        break;
                    }else if (value[i].equipo2 == equipoReal){
                        siguienteEnfrentamientoEquipoReal = value[i].equipo1;
                        break;
                    }
                }
            }
        }
        return siguienteEnfrentamientoEquipoReal;
    }
}