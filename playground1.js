/*Dadas la siguientes clases:

Clase Banda con las propiedades:

nombre - string
generos - Array
integrantes - Array
Crea una clase llamada "Integrante" con las propiedades:

nombre - string
instrumento - string
Escribe la lógica para agregar integrantes a la clase Banda en la función agregarIntegrante. En esta función no debe dejar agregar más de un baterista, es decir hay que validar que solo se pueda agregar un integrante con instrumento "Bateria".

La solución debería tener un input y output como los siguientes:

Input

const data = {
    nombre: "Los Jacks",
    generos: ["rock", "pop", "post-punk"],
    integrantes: [],
}
const banda = new Banda(data)
banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }))
banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))

Output

{
    "nombre":"Los Jacks",
    "generos":["rock","pop","post-punk"],
    "integrantes":[
        {"nombre":"Erik","instrumento":"Guitarra"},
        {"nombre":"Paul","instrumento":"Bateria"}
    ]
}
*/

class Banda {
    constructor({
        nombre,
        generos = [],
    }) {
        this.nombre = nombre;
        this.generos = generos;
        this.integrantes = [];
    }

    agregarIntegrante(integranteNuevo) {
        if (this.integrantes.length == 0) {
            this.integrantes.push(integranteNuevo);
        } else {
            let found = this.integrantes.some(element => element.instrumento == integranteNuevo.instrumento);
            (found == false) ? this.integrantes.push(integranteNuevo) : console.log("Error");
        }
    }
}

//Crear clase Integrante
class Integrante {
    constructor({
        nombre,
        instrumento
    }) {
        this.nombre = nombre;
        this.instrumento = instrumento;
    }
}

const data = {
    nombre: "Los Jacks",
    generos: ["rock", "pop", "post-punk"],
    integrantes: [],
}
const banda = new Banda(data);
banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" })); //integranteNuevo toma la forma del objecto, por ejemplo aqui sería igual a { nombre: "Erik", instrumento: "Guitarra" }
banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }));
