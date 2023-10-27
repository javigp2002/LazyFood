export class equipoReal{
    constructor(
        private nombre:string, 
        private puesto:number, 
        private siguiente_rival:equipoReal){
    }

    getPuesto():number{ 
        return this.puesto;
    }

    getSiguienteRival():equipoReal{
        return this.siguiente_rival;
    }

}