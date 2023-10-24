export class equipoReal{
    nombre: string;
    puesto: number;
    siguiente_rival: equipoReal;

    constructor(nombre:string, puesto:number, siguiente_rival:equipoReal){
        this.nombre = nombre;
        this.puesto = puesto;
        this.siguiente_rival = siguiente_rival;
    }

    getNombre():string{
        return this.nombre;
    }

    getPuesto():number{ 
        return this.puesto;
    }

    getSiguienteRival():equipoReal{
        return this.siguiente_rival;
    }

    setSiguienteRival(siguiente_rival:equipoReal):void{
        this.siguiente_rival = siguiente_rival;
    }
}