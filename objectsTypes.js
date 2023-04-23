//---------------Creación de objetos-----------------------

//### Objeto literal

const ricardo = {
    nombre:"Ricardo",
    edad:24,
    cursosAprobados:[
        "Curso de Programación Básica",
        "Curso de Closures y Scope"
    ],
    agregarCursoAprobado(newCurso){
        this.cursosAprobados.push(newCurso);
    }
}

//ricardo.nombre="Ricar"; //cambiar el valor de la propiedad nombre
//ricardo.agregarCursoAprobado("Curso Básico de JavaScript"); //usar el método del objeto

//### Objeto instanciado a un prototipo

function Student(nombre,edad,cursosAprobados) { //prototipo
    this.nombre = nombre,
    this.edad = edad,
    this.cursosAprobados = cursosAprobados,
    this.borrarCurso = function(){ //no es buena práctica porque afecta el rendimiento, es mejor hacerlo exteriormente (con prototype) para evitar el consumo innecesario de recursos
        this.cursosAprobados.pop();
    }
}

Student.prototype.addCursoAprobado1 = function (newCurso) { //crear un método fuera de la declaración del prototipo, está se ocultará en [[Prototype]] : Object
    this.cursosAprobados.push(newCurso);
}

Student.prototype.addCursoAprobado2 = (newCurso) => cursosAprobados.push(newCurso); //las arrow function implicitamente hacen referencia a this, por lo que no es necesario declararlo


const ricardito = new Student( //creación de objeto instancia de un prototipo
    "Ricar",
    24,
    [
        "Curso de Programación Básica",
        "Curso de Closures y Scope"
    ]
);

//### Clases

class Student2 {
    constructor (nombre="Jacinto",edad=24){ //puede recibir parámetros por defecto
        this.nombre = nombre;
        this.edad = edad;
    }
}

const rica = new Student2();
const terry = new Student2("Terry",12);
const victor = new Student2(undefined,12); //en caso no se quiera colocar un argumento para que sea el por defecto, usar undefined