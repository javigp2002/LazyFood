import { equipoReal } from './equipoReal';

class clasificacionReal{
    equipos:equipoReal[];

    constructor(){
        this.equipos = [];
    }

    getEquipos():equipoReal[]{
        return this.equipos;
    }
}