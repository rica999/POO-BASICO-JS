export default class Courses{
    constructor({
        name,
        teacher,
        modules,
        isFree = false,
        lang = "spanish"
    }) {
        this._name = name;
        this.teacher = teacher;
        this.modules = modules;
        this.isFree = isFree;
        this.lang = lang;
    }
    get Name(){
        return this._name;
    }
    set Name(nuevoNombre){
        nuevoNombre != "" ? this._name = nuevoNombre : console.error("Nombre vacio");
    }
}