export default class Modules {
    constructor({
        name,
        clases
    }) {
        this._name = name;
        this.clases = clases;
    }
    get Name(){
        return this._name;
    }
    set Name(nuevoNombre){
        nuevoNombre != "" ? this._name = nuevoNombre : console.error("Nombre vacio");
    }
}