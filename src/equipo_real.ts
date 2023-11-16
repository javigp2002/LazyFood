export class EquipoReal{
    constructor(
        private nombre:string, 
        private puesto:number, 
       ){
    }

    getPuesto():number{ 
        return this.puesto;
    }


}