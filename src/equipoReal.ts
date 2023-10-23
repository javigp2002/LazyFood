export class equipoReal{
    nombre: string;
    puesto: number;

    constructor(nombre:string, puesto:number){
        this.nombre = nombre;
        this.puesto = puesto;
    }

    getNombre():string{
        return this.nombre;
    }

    getPuesto():number{ 
        return this.puesto;
    }
}