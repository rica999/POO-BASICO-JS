//------------------Creación de clases usando RORO-----------------------------

//RORO facilita la creación de objetos instanciados a una clase, mediante un objeto como parámetro en el constructor

//### Clase escuelas Platzi

class LearningPath {
    constructor({
        name,
        teachers = {}, //puedo definir estructuras vacias
        courses = [],
    }){
        this.name = name;
        this.teachers = teachers;
        this.courses = courses; //llamarlas como cualquier propiedad
    }
}

const escuelaWeb = new LearningPath({
    name: "Escuela de programacion y desarrollo de software",
    teachers: {
        JavaScript: "Freddy Vega", //y definir su contenido al crear un objeto
        Python: "Chun Lee",
        Poo: "Cecilia Perez"
    },
    courses: [
        "Curso de JavaScript",
        "Curso de Python",
        "Curso de Poo",
    ],
});

const escuelaData = new LearningPath({
    name: "Escuela de DataScience",
    teachers: {
        GitYGitHub : "Freddy Vega",
        PostgreeSQL: "Oswaldo Rodríguez González",
        FundamentosDeBasesDeDatos: "Israel Vázquez Morales"
    },
    courses: [
        "Curso de Fundamentos de bases de datos",
        "Curso de Python",
        "Curso de Poo",
    ],
});

//### Clase estudiante Platzi

class Student {
    constructor({
        name,
        username,
        age,
        email,
        learningPath = [],
        approvedCourses=[], //se puede usar valores por defecto
        facebook = undefined,
        instagram = undefined
    }) {
        this.name = name,
        this.age = age,
        this.email = email,
        this.username = username,
        this.learningPath = learningPath,
        this.approvedCourses=approvedCourses,
        this.socialMedia = { //en el constructor se da la forma en que será almacenada la data. Se puede crear otras propiedades que no estén declaradas como parámetro en el constructor
            facebook,
            instagram
        }
    }
}

const alfonso = new Student({
    name:"Alfonso", //no importa el orden en que se envian las propiedades y valores ni si se envian todos los argumentos en RORO
    email:"rachav@gmail.com",
    age:24,
    username:"rica999",
    facebook: "Ricardo Chavez",
    learningPath:[
        escuelaWeb //instancia de un objeto que fue creado con una instancia a otra clase
    ]
})