import Clases from "./clases.mjs";
import Modules from "./modules.mjs";
import Courses from "./courses.mjs";

//Clase Comment (ejemplo de polimorfismo)

class Comment {
    constructor({
        studentName,
        studentRole = "Estudiante",
        content
    }) {
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.content = content;
        this.likes = 0;
    }
    addComment(){
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}

const progBasicaClass1 = new Clases({
    name: "Hola Mundo"
})

const jsPracticoClass1 = new Clases({
    name: "DOM"
})

const jsBasicoClass1 = new Clases({
    name: "¿Por qué JavaScript?"
})

const jsBasicoClass2 = new Clases({
    name: "¿Qué es JavaScript y para qué sirve?"
})

const jsBasicoClass3 = new Clases({
    name: "Elementos de un Lenguaje de Programación: Variables, Funciones y Sintaxis"
})

const jsBasicoClass4 = new Clases({
    name: "Qué es una variable en JavaScript"
})

const jsBasicoClass5 = new Clases({
    name: "Qué son las funciones en JavaScript"
})

const jsBasicoClass6 = new Clases({
    name: "¿Qué es una función declarativa y una expresiva?"
})

const jsBasicoClass7 = new Clases({
    name: "Playground: retorna el tipo"
})

const jsBasicoClass8 = new Clases({
    name: "Quiz de Introducción a JavaScript"
})

const jsBasicoClass9 = new Clases({
    name: "Scope"
})

const jsBasicoClass10 = new Clases({
    name: "Hoisting"
})

const progBasicaModule1 = new Modules({
    name : "Introducción a Programación",
    clases : [
        progBasicaClass1,
    ]
})

const jsPracticoModule1 = new Modules({
    name : "Introducción a JavaScript Práctico",
    clases : [
        jsPracticoClass1,
    ]
})

const jsBasicoModule1 = new Modules({
    name : "Introducción a JavaScript",
    clases : [
        jsBasicoClass1,
        jsBasicoClass2,
        jsBasicoClass3,
        jsBasicoClass4,
        jsBasicoClass5,
        jsBasicoClass6,
        jsBasicoClass7,
        jsBasicoClass8
    ]
})

const jsBasicoModule2 = new Modules({
    name : "Bases de JavaScript",
    clases : [
        jsBasicoClass9,
        jsBasicoClass10
    ]
})

const jsBasico = new Courses({
    name:"Curso Básico de JavaScript",
    teacher: "Diego de Granda",
    modules: [
        jsBasicoModule1,
        jsBasicoModule2
    ]
})

const jsPractico = new Courses({
    name:"Curso Práctico de JavaScript",
    teacher: "Diego de Granda",
    lang : "english",
    modules: [
        jsPracticoModule1
    ]
})

const programacionBasica = new Courses({
    name:"Curso de Programación Básica",
    teacher: "Diego de Granda",
    isFree : true,
    modules: [
        progBasicaModule1
    ]
})

class LearningPath {
    constructor({
        name,
        courses
    }){
        this.name = name;
        this.courses = courses;
    }
}

const JavaScriptAProfundidad = new LearningPath({
    name: "JavaScript a Profundidad",
    courses:[
        jsBasico,
        /* cursoPracticoJavaScript,
        tallerPracticoJavaScriptMatematicas,
        tallerPracticoJavaScriptVideojuegos,
        cursoClosuresScope,
        cursoEcmaScript,
        cursoPOO,
        cursoBasicoPOOJavaScript */
    ]
})

class Student {
    constructor({
        name,
        username,
        age,
        email,
        learningPath = [],
        approvedCourses=[],
        facebook = undefined,
        instagram = undefined
    }) {
        this.name = name,
        this.age = age,
        this.email = email,
        this.username = username,
        this.learningPath = learningPath,
        this.approvedCourses=approvedCourses,
        this.socialMedia = {
            facebook,
            instagram
        }
    }
    addCommentStudent(newComment){
        const comment = new Comment({
            content: newComment,
            studentName: this.name,
        })
        comment.addComment();
    }
}

const alfonso = new Student({
    name:"Alfonso",
    email:"rachav@gmail.com",
    age:24,
    username:"rica999",
    facebook: "Ricardo Chavez",
    learningPath:[
        JavaScriptAProfundidad
    ]
})

//---------------------Herencia--------------------

class FreeStudent extends Student {
    constructor(props) { //props hereda todos los atributos de la clase madre (Student)
        super(props);//super los define como si fueran con this.props = props;
    }

    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
        }
    }
}

//Si se está usando RORO y se requiere agregar propiedades propias de la clase heredada
class BasicStudent extends Student {
    constructor({record,...props}) { //agregar más parametros propios de la clase heredada usando ... (rest operator)
        super(props);
        this.record = record;
    }

    approveCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés");
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student {
    constructor(props,record) { //Acá no se utilizará RORO //props es un objeto por RORO de la clase Student
        super(props);
        this.record = record;
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    //Polimorfismo cambiando lo que hace la función que hereda addCommentStudent
    addCommentStudent(newComment){ //se coloca el mismo nombre de la función
        const comment = new Comment({
            content: newComment,
            studentName: this.name,
            studentRole: "Profesor" //se cambia el valor por defecto de studentRole
        })
        comment.addComment();
    }
}

const juan = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    instagram: "fjuandc",
    learningPaths: [
        JavaScriptAProfundidad
    ],
});

const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
        JavaScriptAProfundidad
    ],
    record: 20
});

const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "freddier",
    email: "freddy@gmail.com",
    instagram: "freddy_v",
    learningPaths: [
        JavaScriptAProfundidad
    ]
},20/*de la propiedad record*/);

//Herencia y métodos propios de la subclase que comparten el mismo nombre pero contenido diferente
juan.approveCourse(programacionBasica); //agregado
juan.approveCourse(jsBasico); //no agregado por no ser free
miguelito.approveCourse(programacionBasica); //agregado
miguelito.approveCourse(jsPractico); //no agregado por ser en idioma inglés

console.log(juan);
console.log(miguelito);

//Polimorfismo con el rol del estudiante
miguelito.addCommentStudent("Si entendí la clase");
freddy.addCommentStudent("No manches");
