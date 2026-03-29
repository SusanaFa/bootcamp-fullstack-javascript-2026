// var era la forma tradicional de declarar variables antes de ES6
// su alcance es de función, no de bloque, lo que puede generar confusión o erroresvar variableVieja = "Pedrito";

// let permite declarar variables cuyo valor puede cambiar
// además, tiene alcance de bloque
let variableNueva = "Juanito";

// const permite declarar variables cuyo valor no puede ser reasignado
// en el caso de objetos o arreglos, su contenido interno sí puede modificarse
const constanteNueva = "Perico de los palotes";

// función tradicional
function restaTradicional(a, b) {
  return a - b;
}

// arrow function
const restaArrow = (a, b) => a - b;

console.log(restaArrow(6, 5));

// función con parámetros por defecto
const resta2 = (a, b = 10) => {
  return a - b;
};

console.log(resta2(5));
console.log(resta2(5, 5));

//segunda función con parámetros por defecto
function saludo(nombre = "Invitado") {
  console.log(
    `Este es un mensaje que retorna la función saludo con un valor predeterminado: ${nombre}`,
  );
}
// invocación de la función saludo
saludo();
saludo("Susana");

// template strings: permiten insertar variables dentro de un texto usando ${}
let nombreString = "Constanza";
let cursoString = "Full stack JS";

console.log(`Hola ${nombreString}, bienvenida al curso de ${cursoString}`);

// crear objeto literal
const estudiante = {
  nombre: "Sandra",
  edad: 25,
  curso: "Full stack Java",
};

// destructuring
// permite extraer propiedades de un objeto y guardarlas en variables separadas
const { nombre: nombreEstudiante, edad, curso: nombreCurso } = estudiante;

console.log("Esto es la destructuración");
console.log(nombreEstudiante);
console.log(edad);
console.log(nombreCurso);

// spread (...) copia o expande los elementos de un objeto o arreglo
// spread copia las propiedades del objeto original en uno nuevo
const nuevoEstudiante = { ...estudiante, edad: 29 };

console.log("Mostrando objeto estudiante");
console.log(estudiante);

console.log("\n Mostrando objeto nuevoEstudiante");
console.log(nuevoEstudiante);

// 1- ejemplo de clase simple
class Persona {
  // constructor: asigna valores iniciales a cada instancia
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  // método: define un comportamiento del objeto
  presentarse() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}

const persona1 = new Persona("Florencia", 35);
console.log(persona1);
console.log(persona1.presentarse());

// 2- ejemplo de clase con getter y setter
// Getter: permite "obtener" un valor como si fuera una propiedad
// setter: permite "asignar" un valor con control o validación
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this._precio = precio; // el guion bajo es una convención para indicar uso interno
  }

  // Getter
  get getPrecio() {
    return `El precio actual es: ${this._precio}`;
  }

  // Setter
  set setPrecio(nuevoPrecio) {
    if (nuevoPrecio <= 0) {
      console.log("Error: el precio debe ser mayor a 0");
      return;
    }
    this._precio = nuevoPrecio;
  }
}

const producto1 = new Producto("Teclado", 15000);

console.log("Llamando a Getter y Setter");

console.log(producto1.getPrecio); //getter

producto1.setPrecio = 20000; //setter
console.log(producto1.getPrecio); //getter

producto1.setPrecio = -100; //setter que lanza el mensaje de error
console.log(producto1.getPrecio); //getter

//1- ejemplo promesa simple
// una promesa representa una tarea u operación que puede resolverse éxito o fallar.

// declaramos una nueva promesa llamada promesaSimple
const promesaSimple = new Promise((resolve, reject) => {
  // variable de control para simular si la operación salió bien o mal
  const todoBien = true;

  if (todoBien) {
    resolve("La promesa simple se resolvió correctamente.");
  } else {
    reject("La promesa simple falló");
  }
});

// aquí tomamos la promesa y le decimos qué hacer cuando se resuelva
promesaSimple
  // .then() se ejecuta cuando la promesa se resuelve correctamente. recibe el resultado en 'respuesta'
  .then((respuesta) => {
    // imprimimos el mensaje de éxito
    console.log("THEN: ", respuesta);
  }) //cerramos el .then()
  // .catch() se ejecuta si la promesa falla. Recibe el error.
  .catch((error) => {
    // imprimimos el mensaje de error
    console.log("CATCH:", error);
  }); //cerramos la función de .catch()

// 2- ejemplo promesa con setTimeout
// esto simula una tarea que tarda un tiempo en completarse

function esperarDosSegundos() {
  // retornar o devolver una promesa
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pasaron 2 segundos y la promesa se resolvió");
    }, 2000);
  });
}

console.log("\n Esta es una promesa con retardo - retraso");
esperarDosSegundos().then((mensaje) => {
  console.log(mensaje);
});
