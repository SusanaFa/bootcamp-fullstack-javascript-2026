// Objetos
// esto es como una agenda real
// el número es la clave (key)
// el nombre es el valor (value)
// aquí no trabajamos con posiciones. esto no es un arreglo
// sino, mas bien, con claves
const agenda = {
  123: "Ana",
  456: "Juanito",
  789: "Sofía",
};

let numero = "789";
// console.log(agenda[numero]); //acceso directo, sin validacion

// // buscando valor, pero realizando validación previa
if (agenda[numero]) {
  console.log(`Contacto: ${agenda[numero]}`);
} else {
  console.log(`Número desconocido`);
}

let nombreABuscar = "Ana";

// en caso de que no tengamos la clave, podemos recorrer los objetos,
// y realizar la búsqueda por el valor
for (let clave in agenda) {
  if (agenda[clave] === nombreABuscar) {
    console.log(`Numero encontrado: ${clave}`);
  }
}

// podemos contar la cantidad de registros de contacto
let contador = 0;

for (let contacto in agenda) {
  contador++;
}
console.log(contador);

// agregando una nueva propiedad
agenda["098"] = "Luis";
console.log(agenda);

const persona = {
  nombre: "Susana",
  edad: 35,
  numeroContacto: 987654321,
  profesion: "Desarrolladora",
  saludar: function () {
    return `Hola, soy ${this.nombre}`;
  },
};

console.log(persona.saludar());
console.log(persona.nombre);
console.log(persona.numeroContacto);

const productos = [
  { nombre: "Polera", precio: 10000 },
  { nombre: "Pantalon", precio: 20000 },
  { nombre: "Zapatillas", precio: 30000 },
];

// recorrer productos
for (let i = 0; i < productos.length; i++) {
  console.log(productos[i].nombre, productos[i].precio);
}

// ejercicio 3- registro de estudiantes

const estudiantes = [
  { nombre: "Ana", nota: 6 },
  { nombre: "Pedro", nota: 4 },
  { nombre: "María", nota: 7 },
];

let suma = 0;

// Recorrer estudiantes
for (let i = 0; i < estudiantes.length; i++) {
  suma += estudiantes[i].nota;

  // Mostrar si aprueba o reprueba
  if (estudiantes[i].nota >= 4) {
    console.log(estudiantes[i].nombre, "aprueba");
  } else {
    console.log(estudiantes[i].nombre, "reprueba");
  }
}

// Calcular promedio
let promedio = suma / estudiantes.length;

console.log("Promedio curso:", promedio.toFixed(2));
