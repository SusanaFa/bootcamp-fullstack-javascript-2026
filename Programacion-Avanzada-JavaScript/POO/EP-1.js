// ejercicios EP-1
// objeto literal
const auto = {
  marca: "Suzuki",
  modelo: "Vitara",
  anio: 1990,
  // método que retorna un texto con los datos del vehículo
  detalle: function () {
    return `La marca ${this.marca}, modelo ${this.modelo}, año ${this.anio}, es de los mejores vehículos creados por suzuki `;
  },
};

// invocar el método del objeto literal
console.log(auto.detalle());

// crear una función constructora
// luego asociar un método usando prototype
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// asociar un método a la función Persona mediante prototype
Persona.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre}`);
};

// creamos las instancias
const persona1 = new Persona("Ana", 24);
const persona2 = new Persona("Juan", 30);

// invocamos el método en cada instancia
persona1.saludar();
persona2.saludar();

// herencia y polimorfismo
// clase base o clase padre
class Mamifero {
  constructor(nombre, edad, esDomestico) {
    this.nombre = nombre;
    this.edad = edad;
    this.esDomestico = esDomestico;
  }

  emitirSonido() {
    console.log(`Sonido de mamifero`);
  }
}
//Clase hija Perro
class Perro extends Mamifero {
  // herencia
  // llamamos al constructor de la clase padre con super
  constructor(nombre, edad, esDomestico, raza) {
    super(nombre, edad, esDomestico);
    this.raza = raza;
  }
  // polimorfismo: redefinimos el método de la clase padre
  emitirSonido() {
    console.log("Guau");
  }
}

// clase hija Gato
class Gato extends Mamifero {
  constructor(nombre, edad, esDomestico, color) {
    super(nombre, edad, esDomestico);
    this.color = color;
  }

  emitirSonido() {
    console.log("Miau");
  }
}

// esta función recibe cualquier objeto que herede de Mamifero
// y ejecuta su propia versión del método emitirSonido()
function hacerSonar(mamifero) {
  console.log(`El animal ${mamifero.nombre} hace sonido`);
  mamifero.emitirSonido();
}

const perro1 = new Perro("Firulais", 4, true, "Mestizo");
const gato1 = new Gato("Felix", 3, true, "Blanco con negro");

hacerSonar(perro1);
hacerSonar(gato1);

// convertir de arreglo de objetos a un JSON
// arreglo de objetos
const estudiantes = [
  { nombre: "Sebastian", edad: 25, curso: "Full stack JS" },
  { nombre: "Arelis", edad: 20, curso: "Full stack JS" },
  { nombre: "José", edad: 35, curso: "Full stack JS" },
];

// convertimos el arreglo de objetos a formato JSON
const estudiantesJSON = JSON.stringify(estudiantes, null, 2);
console.log("\narreglo de objetos");
console.log(estudiantes);
console.log("\n========================================");
console.log("JSON");
console.log(estudiantesJSON);
