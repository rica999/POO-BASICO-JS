export default class Clases {
    constructor({
        name
    }) {
        this._name = name;
    }
    get Name(){
        return this._name;
    }
    set Name(nuevoNombre){
        nuevoNombre != "" ? this._name = nuevoNombre : console.error("Nombre vacio");
    }
}