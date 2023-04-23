/*En este reto dada la siguiente clase:

export class Course {
    constructor({
        name,
        classes = [],
    }) {
        this.name = name;
        this.classes = classes;
    }

    get name() {

    }

    set name(nuevoNombrecito) {

    }
}

Usando el set de la propiedad name valida siempre que se le quiera asignar un valor lo siguiente:

Que sea de tipo string.
Si es string convierte la primera letra de cada palabra del nombre en mayúsculas
Si no es un string no se cambia el valor de la propiedad name.
La solución debería tener un input y output como los siguientes:

Input

const courseName = "curso de programación básica"
const nombreMaysuculas = new Course({
    name: courseName,
})
nombreMayusculas.name

Output

'Curso de Programación Básica'*/

class Course {
    constructor({
        name,
        classes = [],
    }) {
        this.name = name;
        this.classes = classes;
    }

    get Name() {
        return this.name;
    }

    set Name(nuevoNombrecito) {
        let nuevoNombrecitoCapitalize;
        if(typeof(nuevoNombrecito) === "string"){
            let arrayNombrecito = nuevoNombrecito.split(" ");
            for (let i = 0; i < arrayNombrecito.length; i++) {
                arrayNombrecito[i] = arrayNombrecito[i].charAt(0).toUpperCase() + arrayNombrecito[i].slice(1);
            }
            nuevoNombrecitoCapitalize = arrayNombrecito.join(" ");
        }
        this.name = nuevoNombrecitoCapitalize;
    }
}

const courseName = "curso de programación básica";
const nombreMayusculas = new Course({
    name: courseName,
})

console.log(nombreMayusculas.Name);
nombreMayusculas.Name = "curso de programación básica";
console.log(nombreMayusculas.Name);