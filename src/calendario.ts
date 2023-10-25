export class Calendario{
    private dia_actual: Date;
    private calendario_semana_partidos: Array<Array<string>>;

    constructor(dia_actual:Date, calendario_semana_partidos:Array<Array<string>>){
        this.dia_actual = dia_actual;
        this.calendario_semana_partidos = calendario_semana_partidos;
    }

    getDiaActual():Date{
        return this.dia_actual;
    }

    getCalendarioSemanaPartidos():Array<Array<string>>{
        return this.calendario_semana_partidos;
    }
}